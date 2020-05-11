import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

class Address extends React.Component {
    render() {
        return (
            <Wrapper>
                <Text>Meu endereço</Text>
                <Form>
                    <Rectangle>
                        <LabelInput>Logradouro*</LabelInput>
                        <Input placeholder="Rua / Av."/>
                    </Rectangle>                            
                    
                    <Rectangle>
                        <LabelInput>Número*</LabelInput>
                        <Input placeholder="Número"/>
                    </Rectangle>                                        
                    <Rectangle>
                        <LabelInput>Complemento*</LabelInput>
                        <Input placeholder="Apto. / Bloco"/>
                    </Rectangle>                                        
                    <Rectangle>
                        <LabelInput>Bairro*</LabelInput>
                        <Input placeholder="Bairro"/>
                    </Rectangle>                                        
                    <Rectangle>
                        <LabelInput>Cidade*</LabelInput>
                        <Input placeholder="Cidade"/>
                    </Rectangle>                                        
                    <Rectangle>
                        <LabelInput>Estado*</LabelInput>
                        <Input placeholder="Estado"/>
                    </Rectangle>                                        
                    <Button>Salvar</Button>
                </Form>
            </Wrapper>
        )
    }
}

export default Address;