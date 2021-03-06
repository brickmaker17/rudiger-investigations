import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/HomePage';
import WhyHireUs from './pages/HireUs/WhyHireUs';
import WhatDoWeInvestigate from './pages/WhatDoWeInvest/WhatDoWeInvestigate';
import StateOfTheArt from './pages/StateOfTheArt/StateOfTheArt';
import FAQ from './pages/FAQ/FAQ';
import ContactUs from './pages/ContactUs/ContactUs';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import Investigator from './images/investigator.jpg';

const Background = styled.div`
    height: 100vh;
    background-image: url(${Investigator});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
`

const App = () => {
    return(
        <Background>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/WhyHireUs' component={WhyHireUs}/>
                <Route path='/WhatDoWeInvestigate' component={WhatDoWeInvestigate}/>
                <Route path='/StateOfTheArt' component={StateOfTheArt}/>
                <Route path='/FAQ' component={FAQ}/>
                <Route path='/ContactUs' component={ContactUs}/>
            </Switch>
            <Footer />
        </Background>
    );
}

export default App;