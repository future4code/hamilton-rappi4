import React from "react";
import logo from "../../img/logo.svg";
import { login } from "../../actions/authentication"
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { Wrapper, ImgLogo, Form, Rectangle, Button, Input, LabelInput, Text} from "../../components/globalStyle"

class Login extends React.Component {
  state = {};

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.login(this.state.email, this.state.password)
  };

  render() {
    const { email, password } = this.state;
    return (
      <Wrapper>
        <ImgLogo src={logo} />

        <Text>Entrar</Text>
        <Form onSubmit={this.handleFormSubmit}>
          <Rectangle>
            <LabelInput>E-mail:</LabelInput>
            <Input
              required
              name="email"
              type= "email"
              value={email || ""}
              onChange={this.handleInput}
              placeholder="email@email.com"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Senha:</LabelInput>
            <Input
              required
              name="password"
              type="password"
              value={password || ""}
              onChange={this.handleInput}
              placeholder="Mínimo 6 caracteres"
            />
          </Rectangle>
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
  login: (email, password) => dispatch(login(email, password))
});

export default connect(null, mapDispatchToProps)(Login);
