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
import { infoForm } from "../../components/globalForms";

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

const mapDispatchToProps = (dispatch) => ({});

export default connect(null, mapDispatchToProps)(updateUserInfo);
