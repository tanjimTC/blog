import React from 'react';
import './style.css';

const Header = (props) => {
    return (
        <header className='header'>
            <nav>
                <ul class="main-nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <div className='social'>
                social list
            </div>
        </header>
    );
};

export default Header;