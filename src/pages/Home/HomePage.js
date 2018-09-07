import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 150px;
    width: 39vw;
    flex-wrap: wrap;
    margin-left: 20px;
    animation: fadein 4s;
    -moz-animation: fadein 4s; /* Firefox */
    -webkit-animation: fadein 4s; /* Safari and Chrome */
    -o-animation: fadein 4s; /* Opera */

    @keyframes fadein {
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity:0;
        }
        to {
            opacity:1;
        }
    }
    @-o-keyframes fadein { /* Opera */
        from {
            opacity:0;
        }
        to {
            opacity: 1;
        }
    }
`
const SubHeading = styled.h3`
    color: #FFFFFF;
    font-size: 25px;
    height: 30px;
`
const Heading = styled.h1`
    color: #A7A37E;
    font-style: oblique;
    font-family: 'Quantico', sans-serif;
    margin: 15px 0 0 8px;
    font-size: 30px;
    height: 30px;
`
const Licensed = styled.p`
    margin-bottom: 80px;
    color: #EFEBCA;
    width: 50%;

`

const HomePage = () => {
    return(
        <Container>
            <SubHeading>WELCOME TO</SubHeading>
            <Heading>RÜDIGER</Heading>
            <Licensed>A Licensed and bonded full-service private investigators agency, Utah agency #100175</Licensed>
        </Container>
    )
}

export default HomePage;