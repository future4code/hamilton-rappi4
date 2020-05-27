import React from "react";
import logo from "../../img/logo.svg";
import { login } from "../../actions/authentication";
import { connect } from "react-redux";
import { push, replace } from "connected-react-router";
import { routes } from "../Router";
import {
  Wrapper,
  ImgLogo,
  Form,
  Rectangle,
  Button,
  Input,
  LabelInput,
  Text,
} from "../../components/globalStyle";
import { loginForm } from "../../components/globalForms";

class Login extends React.Component {
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

    this.props.login(this.state.email, this.state.password);
  };

  render() {
    return (
      <Wrapper>
        <ImgLogo src={logo} />

        <Text>Entrar</Text>
        <Form onSubmit={this.handleFormSubmit}>
          {loginForm.map((input) => {
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

          <Button type="submit">Entrar</Button>
        </Form>

        <Text>
          Não possui cadastro?{" "}
          <span
            onClick={() => {
              this.props.goToSignUp();
            }}
          >
            Clique aqui.
          </span>
        </Text>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToSignUp: () => {
    dispatch(push(routes.signup));
  },
  login: (email, password) => dispatch(login(email, password)),
  goToHomePage: () => dispatch(replace(routes.home))
});

export default connect(null, mapDispatchToProps)(Login);
