import React from 'react'
import styled from 'styled-components';
import HomeIconFalse from '../../img/homepage-false.svg'
import HomeIconTrue from '../../img/homepage-true.svg'
import CartIconFalse from '../../img/shopping-cart-false.svg'
import CartIconTrue from '../../img/shopping-cart-true.svg'
import AvatarIconFalse from '../../img/avatar-false.svg'
import AvatarIconTrue from '../../img/avatar-true.svg'
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";

const WrapperFooter = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px 7px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #b8b8b8;
    background-color: white;
`

class Footer extends React.Component {

    state = {
        homeBoolean: true,
        cartBoolean: false,
        avatarBoolean: false
    }

    componentDidMount() {
        if(this.props.isOnHome){
            this.setState({
                homeBoolean: true,
                cartBoolean: false,
                avatarBoolean: false
            })
        }
        
        if(this.props.isOnCart){
            this.setState({
                homeBoolean: false,
                cartBoolean: true,
                avatarBoolean: false
            })
        }
        
        if(this.props.isOnUserInfo){
            this.setState({
                homeBoolean: false,
                cartBoolean: false,
                avatarBoolean: true
            })
        }
    }

    render() {
        let iconHome
        let iconCart
        let iconAvatar

        if(this.state.homeBoolean){
            iconHome = HomeIconTrue
        }else{
            iconHome = HomeIconFalse
        }
        
        if(this.state.cartBoolean){
            iconCart = CartIconTrue
        }else{
            iconCart = CartIconFalse
        }
        
        if(this.state.avatarBoolean){
            iconAvatar = AvatarIconTrue
        }else{
            iconAvatar = AvatarIconFalse
        }

        return (
            <WrapperFooter>
                <img src={iconHome} onClick={() => this.props.goToHome()} />
                <img src={iconCart} onClick={() => this.props.goToCart()}/>
                <img src={iconAvatar} onClick={() => this.props.goToUserInfo()} />                
            </WrapperFooter>
        )
    }
    
}

const mapDispatchToProps = (dispatch) => ({
    goToHome: () => dispatch(push(routes.home)),
    goToCart: () => dispatch(push(routes.cart)),
    goToUserInfo: () => dispatch(push(routes.profile))
})

export default connect(null, mapDispatchToProps)(Footer);