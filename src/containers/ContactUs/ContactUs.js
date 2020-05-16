import React from 'react';
import happyImage from '../../blogPostImages/giphy.gif';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div className='contact'>
            <center>
            <h3>Developer is sleeping</h3>
            <img src={happyImage} alt="happy"/>
            </center>
        </div>
    );
};

export default ContactUs;