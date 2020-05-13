import styled from "styled-components";

export const Main = styled.div`
  max-width: 500px;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Roboto", sans-serif;
`;

export const WrapperSearch = styled.div`
  position: relative;
  width: 330px;
  height: 56px;

  label {
    position: absolute;
    top: 50%;
    transform: translateY(-40%);
    left: 45px;
    color: #d0d0d0;
  }
`;
export const InputIcon = styled.img`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
`;
export const InputSearch = styled.input`
  height: 100%;
  width: 100%;
  font-size: 18px;
  padding: 15px;
  padding-left: 45px;
`;
export const ViewCategories = styled.div`
  overflow-x: auto;
  position: relative;
  width: 100%;
  height: 70px;
  margin-bottom: 15px;
`

export const WrapperCategory = styled.div`
  display: flex;
  position: absolute;
  height: 100%;
  align-items:center;

  div + div {
    margin-left: 16px;
  }
`;

export const Category = styled.div` 
  color: ${
    props => props.selected ? "#e86e5a" : "black"
  };

`