import React from 'react'
import styled from 'styled-components';
import HomeIconFalse from '../../img/homepage-false.svg'
import HomeIconTrue from '../../img/homepage-true.svg'
import CartIconFalse from '../../img/shopping-cart-false.svg'
import CartIconTrue from '../../img/shopping-cart-true.svg'
import AvatarIconFalse from '../../img/avatar-false.svg'
import AvatarIconTrue from '../../img/avatar-true.svg'

const WrapperFooter = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px 7px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid #b8b8b8;    
`

function Footer() {
    return (
        <WrapperFooter>
            <img src={HomeIconFalse} />
            <img src={CartIconFalse} />
            <img src={AvatarIconFalse} />
        </WrapperFooter>
    )
}

export default Footer;