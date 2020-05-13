import React,{useState} from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {

    const [search, setSearch] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const openSearch =()=>{
        setSearch(true);
    }

    let searchClass = search?'searchBox active': 'searchBox';

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/post">Post</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>

      <div className="search">
        <form onSubmit={handleSubmit}>
          <div className="search-inner">
            <input className={searchClass} type="text" placeholder="search" />
            <img onClick={openSearch} src={require("../../assets/icons/search.png")} alt="search" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
