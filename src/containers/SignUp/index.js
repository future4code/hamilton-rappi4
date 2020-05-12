import React from "react";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { signUp } from "../../actions/authentication";
import Header from "../../components/Header/Header";
import { Wrapper, Form, Rectangle, Button, Input, LabelInput, Text} from "../../components/globalStyle"

const ImgLogo = styled.img`
  margin-top: 48px;
`;

class SignUp extends React.Component {
  state = {};

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
      // this.props.signUp(name, email, cpf, password);
      // this.props.goToAddress();
    }
  };

  render() {
    const { name, email, cpf, password, confirmPassword } = this.state;

    return (
      <Wrapper>
        <Header goBack={true}/>
        <ImgLogo src={logo} />

        <Text>Cadastrar</Text>
        <Form onSubmit={this.handleFormSubmit}>
          <Rectangle>
            <LabelInput>Nome*</LabelInput>
            <Input
              required
              name="name"
              value={name || ""}
              onChange={this.handleInput}
              placeholder="Nome e sobrenome"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>E-mail*</LabelInput>
            <Input
              required
              name="email"
              type="email"
              value={email || ""}
              onChange={this.handleInput}
              placeholder="email@email.com"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>CPF*</LabelInput>
            <Input
              required
              name="cpf"
              value={cpf || ""}
              onChange={this.handleInput}
              placeholder="000.000.000.00"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Senha*</LabelInput>
            <Input
              required
              name="password"
              type="password"
              value={password || ""}
              onChange={this.handleInput}
              placeholder="Mínimo de 6 caracteres"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Confirmar*</LabelInput>
            <Input
              required
              name="confirmPassword"
              type="password"
              value={confirmPassword || ""}
              onChange={this.handleInput}
              placeholder="Confirme a senha anterior"
            />
          </Rectangle>

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
});

export default connect(null, mapDispatchToProps)(SignUp);
