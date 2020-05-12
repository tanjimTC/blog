import React from 'react';
import './style.css';
import Card from '../UI/Card/Card';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
    return (
        <div>
           <Card>
               <Logo/>
               <Navbar/>
           </Card>
        </div>
    );
};

export default Hero;