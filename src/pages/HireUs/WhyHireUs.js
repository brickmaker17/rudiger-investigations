import React from 'react'
import styled from 'styled-components';
import Investigator from '../../images/investigator.jpg';


const Container = styled.div`
    height: 90vh;
    filter: blur(8px);
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url(${Investigator});

`

const WhyHireUs = () => {
    return(
        <Container>
            <p>Hire Us</p>
        </Container>
    );
}

export default WhyHireUs;