import React from "react";
import { connect } from "react-redux"
import { routes } from '../../containers/Router'
import { push } from "connected-react-router"
import { Main, WrapperImg, CardImage, DeliveryInfo } from "./styled";

class Cards extends React.Component {
  render() {
    const { name, logoUrl, deliveryTime, shipping, id } = this.props.restaurant;

    return (
      <Main onClick={() => { this.props.goToRestaurantDetails(id) }} >
        <WrapperImg>
          <CardImage src={logoUrl} alt={name} />
        </WrapperImg>
        <DeliveryInfo>
          <h5>{name}</h5>
          <p>{deliveryTime}min</p>
          <p>
            {shipping !== 0 ? `Frete: R$${shipping},00` : "Frete: Grátis"}
          </p>
        </DeliveryInfo>
      </Main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  goToRestaurantDetails: (restaurantId) => dispatch(push(routes.restaurant.replace(":id", restaurantId)))
})


export default connect(null, mapDispatchToProps)(Cards)
