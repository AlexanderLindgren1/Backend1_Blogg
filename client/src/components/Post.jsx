import React, { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import PostModal from "./PostModal";

const Posts = (props) => {
  const { posts, setPosts } = props;

  const [showPostModal, setShowPostModal] = useState(false);
  const [ModalPost, setModalPost] = useState({});

  const delPost = async (post) => {
    try {
      const res = await fetch(
        `http://localhost:5000/posts/public/${post._id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.ok) {
        console.log("Post deleted");
        setPosts(posts.filter((p) => p._id !== post._id));
      } else {
        throw new Error("Post not deleted");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="PostContainer">
      {showPostModal && <PostModal post={ModalPost} />}

      {posts &&
        posts.map((post, key) => {
          console.log(post);
          const { title, description } = post;

          return (
            <div className="PostCard" key={key}>
              <h1 onClick={() => (setShowPostModal(true), setModalPost(post))}>
                {title}
              </h1>
              <p id="PostDescription">{description}</p>
              {props.HidePostChanger && (
                <div className="bottom_Post">
                  <button onClick={() => delPost(post)} className="deletePost">
                    Delete
                  </button>
                  <Link to={`/profile/${post._id}`}>Update</Link>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Posts;
