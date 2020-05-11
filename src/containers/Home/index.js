import React from 'react';
import Cards from '../../components/Cards'
import { bindActionCreators }  from 'redux'
import * as restaurantActions from "../../actions/restaurants"
import { connect } from 'react-redux';



class Home extends React.Component {
  state = {

    findRestaurant:""

  }

  componentDidMount(){
    this.props.getRestaurants()

  }

  handleFindRestaurant=(event)=> {
  this.setState({findRestaurant: event.target.value})
  }

    render() {

      const filterRestaurants = this.props.restaurants.filter((restaurant)=>{
       
          const search = this.state.findRestaurant.toLowerCase()
          return restaurant.name.toLowerCase().includes(search)
        
      })
      console.log(this.state.findRestaurant)
   
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
                    onChange={this.handleFindRestaurant}
                    type="text"
                    value={this.state.findRestaurant}
                    
                    />
                    <div>

                     {filterRestaurants.map((restaurant)=> {
                       return (
                         <Cards key={restaurant.id} restaurant={restaurant}/>
                       )
                     })}

                        <p>Cards dos restaurantes</p>
                    </div>
                </div>

            </>
        )
    }

}

const mapStateToProps = (state) => ({

  restaurants:state.restaurants.restaurants

})

 const mapDispatchToProps = (dispatch)=> 
 bindActionCreators(restaurantActions, dispatch)



export default connect(mapStateToProps, mapDispatchToProps) (Home);