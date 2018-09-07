import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
    color: #EFEBCA;
    text-align: center;
`
const TextBody = styled.section`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const TextContent = styled.p`
    width: 67%;
`

const WhatDoWeInvestigate = () => {
    return(
        <div>
            <Heading>What Do We Investigate</Heading>
            <TextBody>
            <TextContent>At RÜDIGER investigations, we will tailor an investigation specific to your needs. Our
                expertise, experience and diverse stable of investigators located throughout the state
                allow us to conduct the simplest or most complex investigations at the drop of a hat. 
                So, whatever the case may be.
            </TextContent>
            </TextBody>
        </div>
    );
}

export default WhatDoWeInvestigate;