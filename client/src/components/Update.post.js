import React, { useEffect, useState } from "react";
import PostService from "../services/post.service";
import { useParams } from "react-router-dom";

const UpdatePost = () => {
 
  let {id} = useParams()
  console.log("This i",id);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const updatedPost = { title, description ,id};
      await PostService.updatePost(updatedPost);
      console.log("Post updated");
    } catch (error) {

    }
  };
  return (
    <div>
      <h3>Update Post</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default UpdatePost;
