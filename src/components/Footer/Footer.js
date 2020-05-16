import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Footer.css";
import Social from "../../containers/Social/Social";

const Footer = () => {
  return (
    <footer class="footer-distributed">
      <Social />
      <div class="footer-left">
        <p class="footer-links">
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about-us">About Us</NavLink>

          <NavLink to="/post/1">Post</NavLink>

          <NavLink to="/contact-us">Contact Us</NavLink>
        </p>

        <p>
          All right reserved <b>Tanjim</b> &copy; 2020
        </p>
      </div>
    </footer>
  );
};

export default Footer;
