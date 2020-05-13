import React from "react";
import { Main, WrapperImg, ProductImg, WrapperDetails, TitleProduct, DescriptionProduct, PriceProduct, ButtonProduct, Quantity} from "./styled"

class CardsProducts extends React.Component {
    render() {
        const { description, name, photoUrl, price } = this.props.product
  
      return (
        <Main>
            <WrapperImg>
                <ProductImg src={photoUrl}/>
            </WrapperImg>
            <WrapperDetails>
                <TitleProduct> {name} </TitleProduct>
                <DescriptionProduct> {description} </DescriptionProduct>
                <PriceProduct> R$ {price} </PriceProduct>
                <Quantity>0</Quantity>
                <ButtonProduct>Adicionar</ButtonProduct>
            </WrapperDetails>

        </Main>
      );
    }
  }

  export default CardsProducts