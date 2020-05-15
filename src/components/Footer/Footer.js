import React from 'react';
import { NavLink , Link } from "react-router-dom";
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer-distributed">

			<div class="footer-right">

				<Link to="#"><i class="fab fa-facebook"></i></Link>
				<Link to="#"><i class="fab fa-twitter"></i></Link>
				<Link to="https://www.linkedin.com/in/its-tanjim-chowdhury/"><i class="fab fa-linkedin"></i></Link>
				<Link to="#"><i class="fab fa-github"></i></Link>

			</div>

			<div class="footer-left">

				<p class="footer-links">
                <NavLink to="/">Home</NavLink>

                <NavLink to="/about-us">About Us</NavLink>

                <NavLink to="/post/1">Post</NavLink>

				<NavLink to="/contact-us">Contact Us</NavLink>
				</p>

				<p>All right reserved <b>Tanjim</b> &copy; 2020</p>
			</div>

		</footer>
    );
};

export default Footer;