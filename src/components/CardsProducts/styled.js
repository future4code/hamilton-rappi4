import styled from "styled-components"

export const Main = styled.div` 
    display: flex;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    width: 100%;
    height: 130px;
    margin: 15px 0;
    overflow: hidden;
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
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    position: relative;
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
export const Quantity = styled.p` 
    position: absolute;
    top: 0;
    right: 0;
    border-radius: 0 8px;
    border: solid 1px black;
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonProduct = styled.button` 
    position: absolute;
    bottom: 0;
    right: 0;
    border-radius: 8px 0;
    border: solid 1px black;
    width: 90px;
    height: 31px;
    background-color: white;
`