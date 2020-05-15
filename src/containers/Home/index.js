import React from "react";
import Cards from "../../components/Cards";
import { bindActionCreators } from "redux";
import * as restaurantActions from "../../actions/restaurants";
import { connect } from "react-redux";
import { routes } from '../../containers/Router'
import { replace } from 'connected-react-router'
import Footer from '../../components/Footer/Footer';
import {
  Title,
  Main,
  InputSearch,
  WrapperSearch,
  InputIcon,
  LabelSearch,
  WrapperCategory,
  ViewCategories,
  WrapperRestaurants,
  Category
} from "./styled";
import SearchIcon from "../../img/search.svg";

class Home extends React.Component {
  state = {
    findRestaurant: "",
    category: "",
    inputSearch: "",
    timeOut: null,
    isSelected: false
  };

  componentDidMount() {
    const token = localStorage.getItem("token")
    if(!token) {
      this.props.goToLogin()
    }
    this.props.getRestaurants();
  }

  handleInputSearch = (event) => {
    if (this.state.timeOut) {
      clearTimeout(this.state.timeOut);
    }
    this.setState({
      inputSearch: event.target.value,
      timeOut: setTimeout(() => {
        this.setState({
          findRestaurant: this.state.inputSearch,
        });
      }, 1000),
    });
  };

  handleCategory = (category) => {
    this.setState({
      category: this.state.category === category ? "" : category,
    });
  };

  render() {
    const filterRestaurants = this.props.restaurants.filter((restaurant) => {
      const search = this.state.findRestaurant.toLowerCase();

      const searchResult = restaurant.name.toLowerCase().includes(search);

      const categoryResult =
        this.state.category === ""
          ? true
          : this.state.category === restaurant.category;
      return categoryResult && searchResult;
    });

    const allCategories = [];

    this.props.restaurants.forEach((restaurant) => {
      const index = allCategories.indexOf(restaurant.category);
      if (index < 0) {
        allCategories.push(restaurant.category);
      }
    });

    return (
      <Main>
        <Title>Rappi4</Title>

        <div>
          
          <WrapperSearch>
            <InputIcon src={SearchIcon} />
            <LabelSearch isSelected={this.state.isSelected} htmlFor="find-restaurant">Restaurante</LabelSearch>
            <InputSearch
              id="find-restaurant"
              onChange={this.handleInputSearch}
              type="text"
              value={this.state.inputSearch}
              onFocus={() => this.setState({isSelected: true})}
              onBlur={() => this.setState({isSelected: false})}
            ></InputSearch>
          </WrapperSearch>

          <div>
            <ViewCategories>
            <WrapperCategory>
              <Category selected={this.state.category === ""} onClick={() => this.handleCategory("")} key={""}>
               Todos
              </Category>
              {allCategories.map((category) => {
                return (
                  <Category
                    selected={this.state.category === category}
                    onClick={() => this.handleCategory(category)}
                    key={category}
                  >
                    {category}
                  </Category>
                );
              })}
            </WrapperCategory>
          </ViewCategories>
          <WrapperRestaurants> 
            {filterRestaurants.length > 0 ? (
              filterRestaurants.map((restaurant) => {
                return <Cards key={restaurant.id} restaurant={restaurant} />;
              })
            ) : (
              <p>Não encontramos =(</p>
            )}
          </WrapperRestaurants>
          </div>
        </div>
        <Footer isOnHome={true} />
      </Main>
    );
  }
}

const mapStateToProps = (state) => ({
  restaurants: state.restaurants.restaurants,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({...restaurantActions, goToLogin: () => replace(routes.login)}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
