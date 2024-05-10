import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postService from "../services/post.service";
function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const Navigate = useNavigate();
  const handleAddingPost = async (e) => {
    e.preventDefault();
    try {
      await postService.addNewPosterPublic(title, description, img).then(
        (response) => {
          console.log("frontend");

          Navigate("/");
          window.location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>add Post</p>
      <form onSubmit={handleAddingPost}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <label htmlFor="description">description</label>
        <input
          type="description"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />

        <label htmlFor="img">image</label>
        <input
          type="file"
          name="img"
          id="img"
          accept="image/jpeg  , image/png, image/jpg"
          onChange={(e) => setImg(e.target.value)}
        />
        <button type="submit">add Post</button>
      </form>
    </div>
  );
}
export default AddPost;
