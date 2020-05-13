import React from 'react'
import { WrapperOrderCard, Title, Date, Price } from './styled';

function OrderCard(props) {
    return (
        <WrapperOrderCard>
            <Title>{props.restaurant}</Title>
            <Date>{props.date}</Date>
            <Price>SUBTOTAL R${props.totalPrice},00</Price>
        </WrapperOrderCard>
    )
}

export default OrderCard;