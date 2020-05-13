import React from "react";
import Home from "./containers/Home/Home";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./containers/ContactUs/ContactUs";
import Post from "./containers/Post/Post";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Hero/>
        <Route path="/" exact component={Home} />
        <Route path="/contact-us" exact component={ContactUs} />
        <Route path="/post/:postId" exact component={Post} />
      </div>
    </Router>
  );
}

export default App;
