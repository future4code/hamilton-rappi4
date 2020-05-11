import React from 'react';






class Cards extends React.Component {
    render(){

      const { name, logoUrl, deliveryTime, shipping } = this.props.restaurant

        return(

            <div>
                <div>
                    <img src={logoUrl} alt={name}/>

                </div>
                <div>

                    <h5>{name}</h5>
                    <p>{deliveryTime}</p>
                    <p>Frete: R${shipping}</p>
                </div>
                
            </div>
        )
    }
}

export default Cards;