import React from "react";
import "./Post.css";
import BlogPost from "../../components/BlogPost/BlogPost";
import SideBar from "../../components/SideBar/SideBar";

const Post = (props) => {
  console.log(props);
  return (
    <div className="container">
        <BlogPost props={props}/>
        <SideBar/>
    </div>
  );
};

export default Post;
