import styled from "styled-components";

export const Loader = styled.div`
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.img`
  margin-top: 88px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 360px;
  padding: 16px;
`;

export const Rectangle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 328px;
  height: 56px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;

export const Button = styled.button`
  background-color: #e86e5a;
  border-radius: 2px;
  border: none;
  width: 328px;
  height: 42px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 264px;
  height: 18px;
  border: none;
  margin: 19px 48px 19px 16px;
  background-color: #fafafa;
`;

export const LabelInput = styled.label`
  height: 18px;
  font-family: Roboto;
  font-size: 12px;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  position: absolute;
  left: 10px;
  top: -15%;
  z-index: 1;
  background-color: #fafafa;
`;

export const Text = styled.p`
  width: 296px;
  height: 18px;
  font-family: Roboto;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;
  span{
    color: #e86e5a;
  }
`;

export const WrapperProfile = styled.div`
  font-family: "Roboto", sans-serif;
  hr {
    width: 328px;
  }  
`;

export const EmptyCartText = styled.p `
    text-align: center;
`

export const Freight = styled.p `
    display: flex;
    justify-content: flex-end;
    margin: 0px 16px;
`

export const CustomDiv = styled.div`
  margin-left: 16px;
  img {
    float: right;
    margin-right: 16px;
  }
`;

export const DarkDiv = styled.div`
  background-color: #eeeeee;
  padding: 16px;
  height: 90px;
  span {
    color: #b8b8b8;
  }
  img {
    float: right;
  }
`;

export const TextProfile = styled.p`
  margin-left: 16px;
`;

export const TextCard = styled.p `
  margin-left: 16px;
`

export const PaymentDiv = styled.div `
  margin-left: 16px;
`

export const SubtotalDiv = styled.div `
  display: flex;
  justify-content: space-between;
  margin: 0px 16px;

  p:nth-child(2){
    color: #e86e5a;
    font-weight: bold;
  }
`
export const ButtonCart = styled.button`
  background-color: rgba(232, 110, 90, 0.5);
  border-radius: 2px;
  border: none;
  width: 328px;
  height: 42px;
  font-weight: bold;
  margin-top: 115px;
`;