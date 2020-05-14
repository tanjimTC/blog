import React, { useState, useEffect } from "react";
import Card from "../../components/UI/Card/Card";
import "./style.css";
import SideBar from "../../components/SideBar/SideBar";
import blogPost from "../../data/blog.json";
import { NavLink } from "react-router-dom";
const Home = (props) => {
  const [state, setState] = useState([]);
  useEffect(() => {
    let data = blogPost.data;
    setState(data);
  }, []);
  console.log(blogPost.data);
  return (
    <div>
      <Card>
        <div className="homePage">
          <section className="homeLeft">
            <img
              src="https://1.bp.blogspot.com/-uUyRrF_pZzI/V9_OnN0WMPI/AAAAAAAAD48/GDN9pK1mnuwJvYdO4SoCJ38adB0sMzmLQCLcB/s1600/Special-1.jpg"
              alt="img"
            />
          </section>
          <section className="homeRight">
            <div className="rightImage">
              <img
                src="https://3.bp.blogspot.com/-zlQO0zfYQd8/V9_M2m9Px-I/AAAAAAAAD4o/qucehvSfM-4210-UQCaFPr6hs7NvJdLHQCPcB/s1600/2-1.jpg"
                alt="img"
              />
            </div>
            <div className="rightImage">
              <img
                src="https://3.bp.blogspot.com/-5w_tj_eAKm4/V9_M2jukj4I/AAAAAAAAD4k/uP-dwlABXso1NXG63jzmsKqE0EdD2MOlgCPcB/s1600/3-1.jpg"
                alt="img"
              />
            </div>
            <div className="rightImage">
              <img
                src="https://2.bp.blogspot.com/-8hLzRELoTM4/Vyc4oa1050I/AAAAAAAADVc/-vQQbmbY1owUgAb_mGNRN_X9kdpSPjLMwCLcB/s1600/asa%2B%25281%2529.jpg"
                alt="img"
              />
            </div>
          </section>
        </div>
      </Card>
      <div className="homeBottom">
        <div className="homePost">
          {state.map((x) => (
            <div className="homeContent">
              <Card style={{marginBottom:'30px' , letterSpacing :'1px' , paddingBottom :'20px'}}>
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
                <div className='postBtn'>
                <NavLink className="navlink" to={`/post/${x.id}`} key={x.id}>
                    <button>READ MORE</button>
                    </NavLink>
                </div>
                </center>
              </Card>
            </div>
          ))}
        </div>
        <SideBar style={{ width: "30%" }} />
      </div>
    </div>
  );
};

export default Home;
