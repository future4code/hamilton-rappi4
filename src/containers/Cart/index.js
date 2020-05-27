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
  WrapperProducts,
  Shipping
} from "../../components/globalStyle";
import { getUserInfo } from "../../actions/profile";
import { placeOrder } from "../../actions/cart";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CardsProducts from "../../components/CardsProducts";

class Cart extends React.Component {
  state = {};

  componentDidMount() {
    const token = localStorage.getItem("token");
    this.props.getUserInfo(token);

    if (token === null) {
      this.props.goToLogin();
    }

    if(this.props.order) {
      this.props.goToHome()
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleOrder = () => {
    const products = this.props.cartProduct.map((entries) => ({
      quantity: entries.quantity,
      id: entries.product.id,
    }));

    if (this.state.paymentMethod && this.props.restaurantId) {
      this.props.placeOrder(
        products,
        this.state.paymentMethod,
        this.props.restaurantId
      );
    }
  };

  render() {
    const { user } = this.props;

    const subTotal = this.props.cartProduct.reduce((total, product) => {
      return product.quantity * product.product.price + total;
    }, this.props.shipping);

    return (
      <WrapperProfile>
        <Header title={"Carrinho"} goBack={false} />

        <DarkDiv>
          <span>Endereço de entrega</span>
          <p>{user && user.address}</p>
        </DarkDiv>

        {this.props.cartProduct.length ? (
          <WrapperProducts>
            {this.props.cartProduct.map((product) => {
              return <CardsProducts product={product.product} />;
            })}
          </WrapperProducts>
        ) : (
          <EmptyCartText>Carrinho vazio</EmptyCartText>
        )}

        <Shipping>Frete: R$ {this.props.shipping},00</Shipping>

        <SubtotalDiv>
          <p>SUBTOTAL</p>
          <p>R$ {subTotal.toFixed(2)} </p>
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
            <ButtonCart onClick={this.handleOrder}>Confirmar</ButtonCart>
          </FormControl>
        </PaymentDiv>
        <Footer isOnCart={true} />
      </WrapperProfile>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.profiles.userInfo,
  cartProduct: state.cart.cart,
  restaurantId: state.cart.restaurantId,
  shipping: state.cart.shipping,
  order: state.cart.order
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (token) => dispatch(getUserInfo(token)),
  goToLogin: () => dispatch(replace(routes.login)),
  goToHome: () => dispatch(replace(routes.home)),
  placeOrder: (products, paymentMethod, restaurantId) =>
    dispatch(placeOrder(products, paymentMethod, restaurantId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
