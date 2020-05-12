import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import { addAddress } from "../../actions/authentication";
import Header from "../../components/Header/Header";
import { Wrapper, Form, Rectangle, Button, Input, LabelInput, Text} from "../../components/globalStyle"

class Address extends React.Component {
  state = {};

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.addAddress(this.state)
    console.log(this.state);
  };
  render() {
    const {
      street,
      number,
      complement,
      neighbourhood,
      city,
      state,
    } = this.state;

    return (
      <Wrapper>
        <Header />

        <Text>Meu endereço</Text>

        <Form onSubmit={this.handleFormSubmit}>
          <Rectangle>
            <LabelInput>Logradouro*</LabelInput>
            <Input
              required
              name="street"
              value={street || ""}
              onChange={this.handleInput}
              placeholder="Rua / Av."
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Número*</LabelInput>
            <Input
              required
              name="number"
              value={number || ""}
              onChange={this.handleInput}
              placeholder="Número"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Complemento</LabelInput>
            <Input
              name="complement"
              value={complement || ""}
              onChange={this.handleInput}
              placeholder="Apto. / Bloco"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Bairro*</LabelInput>
            <Input
              required
              name="neighbourhood"
              value={neighbourhood || ""}
              onChange={this.handleInput}
              placeholder="Bairro"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Cidade*</LabelInput>
            <Input
              required
              name="city"
              value={city || ""}
              onChange={this.handleInput}
              placeholder="Cidade"
            />
          </Rectangle>

          <Rectangle>
            <LabelInput>Estado*</LabelInput>
            <Input
              required
              name="state"
              value={state || ""}
              onChange={this.handleInput}
              placeholder="Estado"
            />
          </Rectangle>

          <Button type="submit">Salvar</Button>
        </Form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addAddress: (add) => dispatch(addAddress(add)),
});

export default connect(null, mapDispatchToProps)(Address);
