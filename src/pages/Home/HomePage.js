import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Eye from '../../images/investigator.jpg';

const HeroImage = styled.img`
    width: 100vw;
    height: 500px;
`;
const Background = styled.div`
    height: 100vh;
    background-image: url(${Eye});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const HomePage = () => {
    return(
        <Background>
            <Navbar />
            {/* <HeroImage src={Eye} alt="Picture of eye"/> */}
        </Background>
    )
}

export default HomePage;