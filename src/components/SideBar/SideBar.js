import React from "react";
import "./SideBar.css";
import Card from "../UI/Card/Card";

const SideBar = (props) => {
  return (
    <div className="sideBar">
      <Card>
        <div className="card-wrapper">
          <div className="cardHeader">
            <span>About Me</span>
          </div>
          <div className="profileImage">
            <img
              src="https://tanjimtc.github.io/img/person1.jpg"
              alt="Tanjim"
            />
          </div>
          <div className="cardBody">
            <p>
              HI There! This is Musarrat Anjum Chowdhury aka Tanjim.I am a
              software developer & lifelong learner. 🚀🚀
            </p>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-wrapper">
          <div className="cardHeader">
            <span>Social List</span>
          </div>
        </div>
      </Card>
      <Card>
        <div className="card-wrapper">
          <div className="cardHeader">
            <span>Recent Post</span>
          </div>
          <div className="recentPosts">
            <div className="recentPost">
              <h3>Fitness Mantra To live Fit Life</h3>
              <span>JUL 21 2016</span>
            </div>
            <div className="recentPost">
              <h3>Beautiful & Special Moment</h3>
              <span>JUL 21 2016</span>
            </div>
            <div className="recentPost">
              <h3>Beauty Lies Within Special</h3>
              <span>JUL 21 2016</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
