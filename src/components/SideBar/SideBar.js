import React, { useEffect, useState } from "react";
import "./SideBar.css";
import Card from "../UI/Card/Card";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";

const SideBar = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const post = blogPost.data;
    setPosts(post);
  }, []);
  return (
    <div className="sideBar" {...props}>
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
              software developer & lifelong learner.{" "}
              <span role="img" aria-label="rocket">
                🚀🚀
              </span>
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
            {posts.map((x) => {
              return (
                <NavLink className="navlink" to={`/post/${x.id}`} key={x.id}>
                  <div className="recentPost">
                    <h3>{x.blogTitle}</h3>
                    <span>{x.postedOn}</span>
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SideBar;
