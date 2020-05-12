import React from "react";
import { bindActionCreators } from "redux";
import * as restaurantActions from "../../actions/restaurants";
import { connect } from "react-redux";
import { CardImage, Main } from "./styled";

class Restaurant extends React.Component {
  state = {
    currentRestaurant: null
  }


  componentDidMount() {
    if(this.props.restaurants.length === 0) {
      this.props.getRestaurants();
    } else {
      this.setCurrentRestaurant()
    }
  }
  
  componentDidUpdate() {
    if(this.props.restaurants.length > 0 && !this.state.currentRestaurant) {
     this.setCurrentRestaurant()
    }
  }

  setCurrentRestaurant = () => {
    const restaurantId = this.props.match.params.id
    const restaurant = this.props.restaurants.find(restaurant => {
    return restaurant.id === restaurantId
    })

    this.setState({ currentRestaurant: restaurant })
  }

  render() {

    if (!this.state.currentRestaurant) {
      return <div>Loading</div>
    }

    const { name, address, shipping, deliveryTime, logoUrl, category } = this.state.currentRestaurant


    return (
      <div>
        <h2>{name}</h2>
        <Main>
          <div>
            <CardImage src={logoUrl} alt={name} />
          </div>
          <h5>{name}</h5>
          <p>{category}</p>
          <p>{deliveryTime} min</p>
          <span>
            {shipping !== 0 ? `Frete: R$${shipping},00` : "Frete: Grátis"}
          </span>
          <p>{address}</p>
        </Main>

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

