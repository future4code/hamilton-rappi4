import React from "react";
import back from "../../img/back.svg"
import styled from "styled-components"
import { connect } from "react-redux";
import { goBack } from "connected-react-router";

const Wrapper = styled.div`
    width: 100%;
    display:flex;
    flex-direction: flex-start;
    border-bottom: 1px solid #b8b8b8;
    padding: 15px 7px;
    p{
        margin: 0 auto;
        width: 100%;
        text-align: center;
    }
`

function Header (props) {
    return(
        <Wrapper>
            {props.goBack ? <img src= {back} onClick = {() => {props.previousPage()}}/> : false}
            <p>{props.title}</p>
        </Wrapper>
    )
} 

const mapDispatchToProps = (dispatch) => ({
    previousPage: () => dispatch(goBack())
});

export default connect(null, mapDispatchToProps)(Header);