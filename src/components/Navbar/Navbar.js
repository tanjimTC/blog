import React,{useState} from "react";
import "./Navbar.css";

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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Post</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
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
