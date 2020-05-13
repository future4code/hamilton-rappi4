import styled from "styled-components"

export const Main = styled.div` 
    display: flex;
    border: solid 2px #b8b8b8;
    border-radius: 8px;
    width: 100%;
    height: 130px;
    margin: 15px 0;
`

export const WrapperImg = styled.div` 
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ProductImg = styled.img`
    height: 100%;
    max-width: 100%;
    object-fit: cover;
`
export const WrapperDetails = styled.div` 
    width: 80%;
    padding-left: 15px;
    font-family: Roboto, sans-serif;
`

export const TitleProduct = styled.p`
    color: #e86e5a;
    font-size: 16px;
`

export const DescriptionProduct = styled.p `
    color: #bdbdbd;
    font-size: 14px;
`

export const PriceProduct = styled.div `
    font-size: 16px;
`