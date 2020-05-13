import React from "react";
import { connect } from "react-redux";
import Header from "../../components/Header/Header";
import {
  Wrapper,
  Form,
  Rectangle,
  Button,
  Input,
  LabelInput,
} from "../../components/globalStyle";
import { addressForm } from "../../components/globalForms";
import { updateAddress } from "../../actions/profile"

class updateUserAddress extends React.Component {
  state = {};

  handleInput = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.updateAddress(this.state)
  };

  render() {
    return (
      <Wrapper>
        <Header goBack={true} title={"Endereço"} />

        <Form onSubmit={this.handleFormSubmit}>
          {addressForm.map((input) => {
            return (
              <Rectangle key={input.name}>
                <LabelInput key={input.label}>{input.label}</LabelInput>
                <Input
                  required = {input.required}
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

          <Button type="submit">Atualizar</Button>
        </Form>
      </Wrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateAddress: (state) => dispatch(updateAddress(state))
});

export default connect(null, mapDispatchToProps)(updateUserAddress);
