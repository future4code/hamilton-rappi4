import React from 'react';
import Cards from '../../components/Cards'
import { bindActionCreators }  from 'redux'
import * as restaurantActions from "../../actions/restaurants"
import { connect } from 'react-redux';



class Home extends React.Component {

  componentDidMount(){
    this.props.getRestaurants()

  }


    render() {
        return (
            <>
                <div>HOME</div>

                <div>

                   <label>Buscar restaurantes</label>

                    <input
                    type="text"
                    />
                    <div>

                     {this.props.restaurants.map((restaurant)=> {
                       return (
                         <Cards restaurant={restaurant}/>
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