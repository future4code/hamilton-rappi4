import React from "react";
import { Main, WrapperImg, ProductImg, WrapperDetails, TitleProduct, DescriptionProduct, PriceProduct, ButtonProduct, Quantity, WrapperSelect, Overlay } from "./styled"
import { bindActionCreators } from "redux";
import * as cartAction from "../../actions/cart"
import { connect } from "react-redux";


class CardsProducts extends React.Component {
  state = {
    selectQuantity: 0,
    isSelectOpen: false
  }

  handleSelect = (e) => {
    this.setState({selectQuantity: e.target.value})
  }

  toggleSelect = () => {
    this.setState({isSelectOpen: !this.state.isSelectOpen})
  }

  render() {
    const { description, name, photoUrl, price } = this.props.product
    console.log(this.state.selectQuantity)
    return (
      <Main>
        <WrapperImg>
          <ProductImg src={photoUrl} />
        </WrapperImg>
        <WrapperDetails>
          <TitleProduct> {name} </TitleProduct>
          <DescriptionProduct> {description} </DescriptionProduct>
          <PriceProduct> R$ {price} </PriceProduct>
          {this.state.selectQuantity > 0 && <Quantity> {this.state.selectQuantity} </Quantity> } 
          <ButtonProduct onClick={this.toggleSelect}>Adicionar</ButtonProduct>

        </WrapperDetails>
        {this.state.isSelectOpen && <WrapperSelect isSelectOpen={this.state.isSelectOpen}>
          <label>Selecione a quantidade desejada</label>
          <select onChange={this.handleSelect} >
            <option value={0}> 0 </option>
            <option value={1}> 1 </option>
            <option value={2}> 2 </option>
            <option value={3}> 3 </option>
            <option value={4}> 4 </option>
            <option value={5}> 5 </option>
            <option value={6}> 6 </option>
            <option value={7}> 7 </option>
            <option value={8}> 8 </option>
            <option value={9} > 9 </option>
            <option value={10}> 10 </option>
          </select>
          <button onClick={() => this.props.addToCart(this.state.selectQuantity, this.props.product)}>Adicionar ao carrinho</button>

        </WrapperSelect>}

        <Overlay
          onClick={this.toggleSelect}
          isSelectOpen={this.state.isSelectOpen}
        />


      </Main>
    );
  }
}


const mapDispatchToProps = (dispatch) =>
  bindActionCreators(cartAction, dispatch);

export default connect(null, mapDispatchToProps)(CardsProducts);