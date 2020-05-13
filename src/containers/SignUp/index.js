import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import { signUp } from "../../actions/authentication";
import Header from "../../components/Header/Header";
import {
  Wrapper,
  Form,
  Rectangle,
  Button,
  Input,
  LabelInput,
  Text,
} from "../../components/globalStyle";
import { signUpForm } from "../../components/globalForms";

const ImgLogo = styled.img`
  margin-top: 48px;
`;

class SignUp extends React.Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem("token")
    
    if(token !== null){
      this.props.goToHomePage()
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, cpf, password, confirmPassword } = this.state; // Dar um jeito de não repetir código

    if (password !== confirmPassword) {
      alert("Senhas não batem");
    } else {
      this.props.signUp(name, email, cpf, password);
      this.props.goToAddress();
    }
  };

  render() {
    return (
      <Wrapper>
        <Header goBack={true} />
        <ImgLogo src={logo} />

        <Text>Cadastrar</Text>
        <Form onSubmit={this.handleFormSubmit}>
          {signUpForm.map((input) => {
            return (
              <Rectangle key={input.name}>
                <LabelInput key={input.label}>{input.label}</LabelInput>
                <Input
                  required
                  name={input.name}
                  type={input.type}
                  pattern={input.pattern}
                  title={input.title}
                  placeholder={input.placeholder}
                  value={this.state[input.name] || ""}
                  onChange={this.handleInput}
                />
              </Rectangle>
            );
          })}

          <Button type="submit">Criar</Button>
        </Form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToAddress: () => {
    dispatch(push(routes.address));
  },
  signUp: (name, email, cpf, password) =>
    dispatch(signUp(name, email, cpf, password)),
  goToHomePage: () => dispatch(replace(routes.home))  
});

export default connect(null, mapDispatchToProps)(SignUp);
