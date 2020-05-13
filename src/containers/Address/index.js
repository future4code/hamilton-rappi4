import React from "react";
import { connect } from "react-redux";
import { addAddress } from "../../actions/authentication";
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
import { addressForm } from "../../components/globalForms";

class Address extends React.Component {
  state = {};

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.addAddress(this.state);
  };

  render() {
    return (
      <Wrapper>
        <Header goBack={true} />

        <Text>Meu endereço</Text>

        <Form onSubmit={this.handleFormSubmit}>
          {addressForm.map((input) => {
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
