import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import { Wrapper, Form, Rectangle, Button, Input, LabelInput} from "../../components/globalStyle"

class updateUserInfo extends React.Component {
  state = {};

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
        
  };
  render() {
    const {
      name,
      email,
      cpf
    } = this.state;

    return (
      <Wrapper>
        <Header goBack={true} title={"Editar"}/>

        <Form onSubmit={this.handleFormSubmit}>
          <Rectangle>
            <LabelInput>Nome*</LabelInput>
            <Input
              required
              name="name"
              value={name || ""}
              onChange={this.handleInput}
              placeholder=""
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>E-mail*</LabelInput>
            <Input
              required
              name="email"
              value={email || ""}
              onChange={this.handleInput}
              placeholder=""
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>CPF*</LabelInput>
            <Input
              required
              name="cpf"
              value={cpf || ""}
              onChange={this.handleInput}
              placeholder=""
            />
          </Rectangle>

          <Button type="submit">Atualizar</Button>
        </Form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({

});

export default connect(null, mapDispatchToProps)(updateUserInfo);