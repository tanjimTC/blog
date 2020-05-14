import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import blogPost from "../../data/blog.json";

const BlogPost = ({ props }) => {
  const [post, setPost] = useState({
    id: "",
    blogCategory: "",
    blogTitle: "",
    postedOn: "",
    author: "",
    blogImage: "",
    blogText: "",
  });
  useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find((x) => x.id === parseInt(postId));
    setPost(post);
    const imageName = post.blogImage;
    console.log(imageName);
  }, [props.match.params.postId]);

  if (post.blogImage === "") return null;

  return (
    <div className="blogPost">
      <div className="blogHeader">
        <span className="blogCategory">{post.blogCategory}</span>
        <h1 className="postTitle">{post.blogTitle}</h1>
        <span className="postedBy">
          posted on {post.postedOn} by {post.author}
        </span>
      </div>
      <div className="postImageContainer">
        <img
          src={require("../../blogPostImages/" + post.blogImage)}
          alt="Post"
        />
      </div>
  <h3>{post.slug}</h3>
      <div className="postContent">
        <p>{post.blogText}</p>
      </div>
    </div>
  );
};

export default BlogPost;
