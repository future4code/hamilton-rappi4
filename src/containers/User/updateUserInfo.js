import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router";
import Header from "../../components/Header/Header";
import {
  Wrapper,
  Form,
  Rectangle,
  Button,
  Input,
  LabelInput,
} from "../../components/globalStyle";
import { infoForm } from "../../components/globalForms";
import { updateInfo } from "../../actions/profile"

class updateUserInfo extends React.Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem("token")

    if(token === null){
      this.props.goToLogin()
    }
  }

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });

    if (name === "cpf") {
      let newCPF = e.target.value;

      newCPF = newCPF.replace(/\D/g, "");
      newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2");
      newCPF = newCPF.replace(/(\d{3})(\d)/, "$1.$2");
      newCPF = newCPF.replace(/(\d{3})(\d{1,2})$/, "$1.$2");

      if (newCPF.length < 15) this.setState({cpf: newCPF});
    }
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.updateInfo(this.state)
  };
  render() {
    return (
      <Wrapper>
        <Header goBack={true} title={"Editar"} />

        <Form onSubmit={this.handleFormSubmit}>
          {infoForm.map((input) => {
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
                  maxLength= {input.maxLength}
                />
              </Rectangle>
            );
          })}

          <Button type="submit">Atualizar</Button>
        </Form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateInfo: (state) => dispatch(updateInfo(state)),
  goToLogin: () => dispatch(replace(routes.login))
});

export default connect(null, mapDispatchToProps)(updateUserInfo);
