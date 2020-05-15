import React from "react";
import Home from "./containers/Home/Home";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./containers/ContactUs/ContactUs";
import Post from "./containers/Post/Post";
import AboutUs from "./containers/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Header/> */}
        <Hero/>
        <Route path="/" exact component={Home} />
        <Route path="/about-us" exact component={AboutUs} />
        <Route path="/post/:postId" exact component={Post} />
        <Route path="/contact-us" exact component={ContactUs} />
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
