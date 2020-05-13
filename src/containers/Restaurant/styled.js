import styled from 'styled-components'

export const Main = styled.div` 
    *{
        margin: 0;
    }
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const MainRestaurant = styled.div`
    width: 100%;
    height: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    overflow: hidden;
`

export const WrapperImage = styled.div`
    height: 50%;
    margin-bottom: 15px;
`

export const CardImage = styled.img `
    height: 100%;
    width: 100%;
    object-fit: cover;
`

export const TitleRestaurant = styled.p`
    color: #e86e5a;
    font-size: 16px;
`

export const WrapperDescription = styled.div`
    color: #bdbdbd;
    font-size: 14px;
    margin: 15px 0;
    display: grid;
    grid-template-columns: 50px 1fr;
    grid-template-rows: repeat (3, 1fr);
    grid-gap: 15px;

    p {
        grid-column: 1/3;
        &:nth-child(2){
            grid-column: 1/2;
        }
        &:nth-child(3){
            grid-column: 2/3;
        }
    }
`


