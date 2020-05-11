import React from 'react'
import styled from 'styled-components';
import logo from '../../img/logo.svg';

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImgLogo = styled.img `
    margin-top: 88px;
`

const Form = styled.form `
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 360px;
    padding: 16px;
`

const Rectangle = styled.div `
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 328px;
    height: 56px;
    border-radius: 2px;
    border: solid 1px #b8b8b8;
`

const Button = styled.button `
    background-color: #e86e5a;
    border-radius: 2px;
    border: none;
    width: 328px;
    height: 42px;
    font-weight: bold;
`

const Input = styled.input `
    width: 264px;
    height: 18px;
    border: none;
    margin: 0 48px 0 16px;
`

const LabelInput = styled.label `
    width: 78px;
    height: 18px;
    font-family: Roboto;
    font-size: 12px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.29px;
    color: #b8b8b8;
`

const Text = styled.p `
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
`

class SignUp extends React.Component {
    render() {
        return (
            <Wrapper>
                <ImgLogo src={logo} />

                <Text>Cadastrar</Text>
                <Form>
                    <Rectangle>
                        <LabelInput>Nome*</LabelInput>
                        <Input placeholder="Nome e sobrenome"/>
                    </Rectangle>                            
                    
                    <Rectangle>
                        <LabelInput>E-mail*</LabelInput>
                        <Input placeholder="email@email.com"/>
                    </Rectangle>                                        
                    <Rectangle>
                        <LabelInput>CPF*</LabelInput>
                        <Input placeholder="000.000.000-00"/>
                    </Rectangle>                                        
                    <Rectangle>
                        <LabelInput>Senha*</LabelInput>
                        <Input placeholder="Mínimo de 6 caracteres"/>
                    </Rectangle>                                        
                    <Rectangle>
                        <LabelInput>Confirmar*</LabelInput>
                        <Input placeholder="Confirme a senha anterior"/>
                    </Rectangle>                                        
                    <Button>Criar</Button>
                </Form>
            </Wrapper>
        )
    }
}

export default SignUp;