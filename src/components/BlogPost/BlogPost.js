import React,{ useEffect } from "react";
import './BlogPost.css';
import blogPost from '../../data/blog.json';

const BlogPost = ({props}) => {

    // const [post, setPost] = useState()
    useEffect(()=>{
        const postId = props.match.params.postId;
        console.log(postId);
        const post =blogPost.data.find(x=> x.id === parseInt(postId));
        console.log(post);
    },[])
    return (
        <div className="blogPost">
            <div className='blogHeader'>
                <span className='blogCategory'>Featured</span>
                <h1 className='postTitle'>Fitness Mantra To Live Fit Life</h1>
                <span className='postedBy'>posted on July 21, 2016 by Sora Blogging Tips</span>
            </div>
            <div className="postImageContainer">
                <img src={require('../../blogPostImages/memories-from.jpg')} alt="Post Image"/>
            </div>
            <div className="postContent">
                
            </div>
        </div>
    );
};  

export default BlogPost;
