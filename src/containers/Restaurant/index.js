import React from "react";
import { bindActionCreators } from "redux";
import * as restaurantActions from "../../actions/restaurants";
import { connect } from "react-redux";
import { routes } from '../../containers/Router'
import { replace } from 'connected-react-router'
import { Main, MainRestaurant, WrapperDescription, WrapperImage, CardImage, TitleRestaurant, WrapperProduct} from "./styled";
import CardsProducts from "../../components/CardsProducts"
import Footer from "../../components/Footer/Footer"

class Restaurant extends React.Component {
  state = {
    currentRestaurant: null
  }


  componentDidMount() {
    const token = localStorage.getItem("token")
    if(!token) {
      this.props.goToLogin()
    }
    
    const restaurantId = this.props.match.params.id
    
    if (this.props.restaurants.length === 0) {
      this.props.getRestaurants();
    } else {
      this.setCurrentRestaurant()
    }


    this.props.getRestaurantsDetails(restaurantId)
  }

  componentDidUpdate() {
    if (this.props.restaurants.length > 0 && !this.state.currentRestaurant) {
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

    if (!this.state.currentRestaurant || !this.props.restaurantDetails) {
      return <div>Loading</div>
    }

    const { name, address, shipping, deliveryTime, logoUrl, category } = this.state.currentRestaurant

    return (
      <Main>
          <MainRestaurant>
          <WrapperImage>
            <CardImage src={logoUrl} alt={name} />
          </WrapperImage>
          <TitleRestaurant>{name}</TitleRestaurant>
          <WrapperDescription>
            <p>{category}</p>
            <p>{deliveryTime} min</p>
            <p>
              {shipping !== 0 ? `Frete: R$${shipping.toFixed(2)}` : "Frete: Grátis"}
            </p>
            <p>{address}</p>
          </WrapperDescription>
        </MainRestaurant>

        <WrapperProduct>
          {this.props.restaurantDetails.map(([category, products]) => {
            return <React.Fragment key={category}>
            <h3> {category} </h3>
            <hr/>  
            {products.map(product => { 
              return <CardsProducts key={product.id} product={product} restaurantId={this.props.match.params.id} shipping={shipping} />
            })}
            </React.Fragment>
          })}
        </WrapperProduct>
        
        <Footer isOnHome={true} />
      </Main>
    );
  }
}


const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
  restaurantDetails: state.restaurants.restaurantDetails
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({...restaurantActions, goToLogin: () => replace(routes.login)}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);