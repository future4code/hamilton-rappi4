import React from 'react';
import Cards from '../../components/Cards'
import { bindActionCreators } from 'redux'
import * as restaurantActions from "../../actions/restaurants"
import { connect } from 'react-redux';



class Home extends React.Component {
  state = {

    findRestaurant: "",
    category: "",
    inputSearch:"",
    timeOut:null

  }



  componentDidMount() {
    this.props.getRestaurants()

  }

  handleInputSearch = (event) => {
    if(this.state.timeOut) {
      clearTimeout(this.state.timeOut)
    }
    this.setState({ inputSearch: event.target.value, timeOut:setTimeout(()=>{this.setState({
      findRestaurant:this.state.inputSearch
    })},1000) })
  }


  handleCategory = (category) => { 
    this.setState({ category: this.state.category === category ? "" : category  }) 
  }

  render() {

    const filterRestaurants = this.props.restaurants.filter((restaurant) => {
        const search = this.state.findRestaurant.toLowerCase()

        const searchResult = restaurant.name.toLowerCase().includes(search)

        const categoryResult = this.state.category === "" ? true: (this.state.category === restaurant.category )
      return categoryResult && searchResult
    })


    const allCategories = []

    this.props.restaurants.forEach(restaurant => {
      const index = allCategories.indexOf(restaurant.category)
      if (index < 0) {
        allCategories.push(restaurant.category)
      }

    });


    return (
      <>
        <div>HOME</div>

        <div>
          <label
            htmlFor="find-restaurant"
          >Buscar restaurantes
                   </label>

          <input
            id="find-restaurant"
            onChange={this.handleInputSearch}
            type="text"
            value={this.state.inputSearch}

          />
          <div>
          <div onClick={() => this.handleCategory("")} key={""}>Ver todos</div>
            {allCategories.map((category) => {
              return <div onClick={() => this.handleCategory(category)} key={category}>{category}</div>

            })}
            {filterRestaurants.length > 0 ? filterRestaurants.map((restaurant) => {
              return (
                <Cards key={restaurant.id} restaurant={restaurant} />
              )
            }) : <p>Não encontramos =(</p>
            }
          </div>
        </div>

      </>
    )
  }

}

const mapStateToProps = (state) => ({

  restaurants: state.restaurants.restaurants

})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(restaurantActions, dispatch)



export default connect(mapStateToProps, mapDispatchToProps)(Home);