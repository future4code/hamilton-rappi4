import React from "react";
import { bindActionCreators } from "redux";
import * as restaurantActions from "../../actions/restaurants";
import { connect } from "react-redux";

class Restaurant extends React.Component {

  render() {
    return (
      <div>
        <h2>Restaurante</h2>



        {/* <Main>
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
      </Main> */}

      </div>
    );
  }
}


const mapStateToProps = (state) => ({
    restaurants: state.restaurants.restaurants,
    restaurantDetails: state.restaurants.restaurantDetails
  });
  
  const mapDispatchToProps = (dispatch) =>
    bindActionCreators(restaurantActions, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
  
