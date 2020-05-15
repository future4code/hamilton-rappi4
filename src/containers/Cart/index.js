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
import { placeOrder } from "../../actions/cart"
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
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleOrder = () => {

    const products = this.props.cartProduct.map(entries => ({
      quantity: entries.quantity, id: entries.product.id
    }))

    console.log("No Cart", products, this.state.paymentMethod, this.props.restaurantId )


    if(this.state.paymentMethod && this.props.restaurantId) {
      this.props.placeOrder(products, this.state.paymentMethod, this.props.restaurantId)
    }
  }

  render() {
    const { user } = this.props;

    const subTotal = this.props.cartProduct.reduce((total, product) => {
      return product.quantity * product.product.price + total;
    }, 0);

    return (
      <WrapperProfile>
        <Header title={"Carrinho"} goBack={false} />

        <DarkDiv>
          <span>Endereço de entrega</span>
          <p>{user && user.address}</p>
        </DarkDiv>

        {this.props.cartProduct.length ? (
          <div>
            {this.props.cartProduct.map((product) => {
              return <CardsProducts product={product.product} />;
            })}
          </div>
        ) : (
          <EmptyCartText>Carrinho vazio</EmptyCartText>
        )}

        {/* Add frete */}

        <SubtotalDiv>
          <p>SUBTOTAL</p>
          <p>R$ {subTotal} </p>
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
  shipping: state.cart.shipping
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: (token) => dispatch(getUserInfo(token)),
  goToLogin: () => dispatch(replace(routes.login)),
  placeOrder: (products, paymentMethod, restaurantId) =>
    dispatch(placeOrder((products, paymentMethod, restaurantId))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
