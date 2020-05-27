import React from 'react'
import { WrapperOrderCard, Title, Date, Price } from './styled';

function OrderCard(props) {
    return (
        <WrapperOrderCard>
            <Title>{props.restaurant}</Title>
            <Date>{props.date}</Date>
            <Price>SUBTOTAL R${props.totalPrice}</Price>
        </WrapperOrderCard>
    )
}

export default OrderCard;