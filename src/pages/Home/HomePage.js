import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import Eye from '../../images/daniil-kuzelev-327645-unsplash.jpg';

const HeroImage = styled.img`
    width: 200px;
    height: 200px;
`;
const Background = styled.div`
    height: 100vh;
    background-image: radial-gradient(#002E2E, #000B0B);
`

const HomePage = () => {
    return(
        <Background>
            <Navbar />
            <HeroImage src={Eye} alt="Picture of eye"/>
        </Background>
    )
}

export default HomePage;