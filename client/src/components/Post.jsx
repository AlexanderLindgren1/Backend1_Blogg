import React, { useState, useEffect } from "react";
import PostService from "../services/post.service";
import AddPost from "./Addposter";
import { Link, Navigate } from "react-router-dom";
import UpdatePost from "./Update.post";
import image from "../image/Plague-doctor-girl-with-violin.jpg";
import PostModal from "./PostModal";

const Posts = (props) => {
  const { posts, delPost } = props;
  const [showPostModal, setShowPostModal] = useState(false);
  const [ModalPost, setModalPost] = useState({});


  return (
    <div className="PostContainer">
      {showPostModal && <PostModal post ={ModalPost}/>}
      {posts &&
        posts.map((post, key) => {
          const { title, description, img } = post;

          return (
            <div className="PostCard" key={key}>
                <div className="imgPost"><img src={img} alt="Post Image" id="postImageModal" /></div>

              <h1 onClick={() => (setShowPostModal(true), setModalPost(post))}>{title}</h1>
              <h4 className="PostDescription">{description }</h4>
              <div className="bottom_Post">
              <button onClick={() => delPost(post)} className="deletePost">Delete</button>
              <Link to={`/public/${post._id}`}>Update</Link>
              </div>
       
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
