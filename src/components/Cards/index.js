import React from "react";
import { CardImage, Main, DeliveryInfo } from "./styled";

class Cards extends React.Component {
  render() {
    const { name, logoUrl, deliveryTime, shipping, id } = this.props.restaurant;

    return (
      <Main onClick={()=>{this.props.goToRestaurantDetails(id)}} >
        <div>
          <CardImage src={logoUrl} alt={name} />
        </div>
        <>
          <h5>{name}</h5>

          <DeliveryInfo>
            <p>{deliveryTime}min</p>
            <p>
              {shipping !== 0 ? `Frete: R$${shipping},00` : "Frete: Grátis"}
            </p>
          </DeliveryInfo>
        </>
      </Main>
    );
  }
}



export default Cards;
