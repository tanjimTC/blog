import React from "react";
import "./Social.css";
import { NavLink, Link } from "react-router-dom";

const Social = (props) => {
  return (
      <div class="footer-right" {...props}>
        <Link to="#">
          <i class="fab fa-facebook"></i>
        </Link>
        <Link to="#">
          <i class="fab fa-twitter"></i>
        </Link>
        <Link to="https://www.linkedin.com/in/its-tanjim-chowdhury/">
          <i class="fab fa-linkedin"></i>
        </Link>
        <Link to="#">
          <i class="fab fa-github"></i>
        </Link>
      </div>
  );
};

export default Social;
