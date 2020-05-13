import styled from 'styled-components'



export const Main = styled.div`
    font-family: Roboto, sans-serif;
    display: flex;
    flex-direction: column;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    width: 100%;
    height: 250px;
    margin: 15px 0;
    overflow: hidden;
    *{
        margin: 0;
    }
`
export const WrapperImg = styled.div ` 
    height: 70%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardImage = styled.img `
    height: 100%;
    width: 100%;
    object-fit: cover;
`
export const DeliveryInfo = styled.div `
    padding: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 15px;

    h5 {
        color:#e86e5a;
        font-size: 16px;
        grid-column: 1/3;
    }

    p {
        grid-column: 1/3;
        color: #bdbdbd;
        
        &:nth-child(2){
            grid-column: 1/2;
        }
        &:nth-child(3){
            grid-column: 2/3;
        }
    }
`