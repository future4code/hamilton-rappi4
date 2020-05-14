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
    border: solid 1px #e86e5a;
    width: 33px;
    height: 33px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #e86e5a;
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
export const WrapperSelect = styled.div`
    position: fixed;
    z-index: 10;
    align-self: center;
    justify-self: center;
    top: ${(props) => (props.isSelectOpen ? "220px" : 0)};
    width: 90vw;
    height: 20vh;
    background-color: white;
    transition: 0.5s;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around; 
`

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: ${(props) => (props.isSelectOpen ? 0.8 : 0)};
    pointer-events: ${(props) => (props.isSelectOpen ? "auto" : "none")};
    transition: 0.5s;
`