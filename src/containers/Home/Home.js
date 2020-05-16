import React, { useState, useEffect } from "react";
import Card from "../../components/UI/Card/Card";
import "./style.css";
import SideBar from "../../components/SideBar/SideBar";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";
import '../../../src/';
const Home = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let data = blogPost.data;
    setState(data);
  }, []);
  return (
    <div>
      <Card>
        <div className="homePage">
          <section className="homeLeft">
            <div className="text">
              <p>
                <span>
                  <i className="fas fa-user-circle"></i>
                </span>{" "}
                Fashion
              </p>
              <div>
                <NavLink className='linkToPost' to={`/post/5`}>
                  <h3>MEMORIES FROM LAST SUMMER</h3>
                </NavLink>
              </div>
            </div>
          </section>
          <section className="homeRight">
            <div className="rightImage">
              <div className="text">
                <p>
                  <span>
                    <i className="fas fa-user-circle"></i>
                  </span>{" "}
                  <b>Fashion</b>
                </p>
                <div>
                <NavLink className='linkToPost' to={`/post/5`}>
                  <h3>BEAUTIFUL & SPECIAL MOMENT</h3>
                </NavLink>
                </div>
              </div>
            </div>
            <div className="rightImage2">
              <div className="text">
                <p>
                  <span>
                    <i className="fas fa-user-circle"></i>
                  </span>{" "}
                  <b>Fashion</b>
                </p>
                <div>
                <NavLink className='linkToPost' to={`/post/3`}>
                  <h3>BEAUTY LIES WITHIN SPECIAL</h3>
                </NavLink>
                </div>
              </div>
            </div>
            <div className="rightImage3">
              <div className="text">
                <p>
                  <span>
                    <i className="fas fa-user-circle"></i>
                  </span>{" "}
                  <b>Fashion</b>
                </p>
                <div>
                <NavLink className='linkToPost' to={`/post/4`}>
                  <h3>SLIDING MY WAY TO LIFE</h3>
                </NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Card>
      <div className="homeBottom">
        <div className="homePost">
          {state.map((x) => (
            <div className="homeContent" key={Math.random()}>
              <Card
                style={{
                  marginBottom: "30px",
                  letterSpacing: "1px",
                  paddingBottom: "20px",
                }}
              >
                <div className="homeImg">
                  <img
                    src={require("../../blogPostImages/" + x.blogImage)}
                    alt="Post"
                  />
                </div>
                <center>
                  <span className="blogCategory">{x.blogCategory}</span>
                  <h2 className="postTitle">{x.blogTitle}</h2>
                  <span className="postedBy">
                    posted on {x.postedOn} by {x.author}
                  </span>
                </center>
                <div className="postContent">
                  <p>{x.blogText.substring(0, 250)}...</p>
                </div>
                <center>
                  <div className="postBtn">
                    <NavLink
                      className="navlink"
                      to={`/post/${x.id}`}
                      key={x.id}
                    >
                      <button>READ MORE</button>
                    </NavLink>
                  </div>
                </center>
              </Card>
            </div>
          ))}
        </div>
        <SideBar  />
      </div>
    </div>
  );
};

export default Home;
