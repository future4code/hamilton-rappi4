import React from "react";
import { connect } from "react-redux";
import { replace } from "connected-react-router";
import { routes } from "../Router";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import {
  WrapperProfile,
  DarkDiv,
  TextCard,
  PaymentDiv,
  SubtotalDiv,
  ButtonCart,
  EmptyCartText,
  Freight,
} from "../../components/globalStyle";
import { getUserInfo } from "../../actions/profile";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

class Cart extends React.Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.getUserInfo(token);

    if (token === null) {
      this.props.goToLogin();
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    const { user } = this.props;

    return (
      <WrapperProfile>
        <Header title={"Carrinho"} goBack={false} />

        <DarkDiv>
          <span>Endereço de entrega</span>
          <p>{user && user.address}</p>
        </DarkDiv>

        <EmptyCartText>Carrinho vazio</EmptyCartText>
        
        <Freight>Frete R$</Freight>
        <SubtotalDiv>
          <p>SUBTOTAL</p>
          <p>R$</p>
        </SubtotalDiv>

        <TextCard>Forma de pagamento</TextCard>
        <hr />

        <PaymentDiv>
          <FormControl>
            <RadioGroup
              name="paymentMethod"
              value={this.state.value}
              onChange={this.handleInputChange}
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="Dinheiro"
              />
              <FormControlLabel
                value="creditcard"
                control={<Radio />}
                label="Cartão de Crédito"
              />
            </RadioGroup>
          </FormControl>
          <ButtonCart>Confirmar</ButtonCart>
        </PaymentDiv>
        <Footer isOnCart={true} />
      </WrapperProfile>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profiles.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (token) => dispatch(getUserInfo(token)),
  goToLogin: () => dispatch(replace(routes.login)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
