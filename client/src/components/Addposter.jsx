import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import postService from "../services/post.service";

const censorText = (text) => {
  const sensitiveWords = ["sensitive", "badword", "inappropriate"];

  sensitiveWords.forEach((word) => {
    const regex = new RegExp(`${word}`, "gi");
    text = text.replace(regex, "*".repeat(word.length));
  });

  return text;
};

function AddPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const Navigate = useNavigate();

  const handleAddingPost = async (e) => {
    e.preventDefault();
    try {
      const censoredTitle = censorText(title);
      const censoredDescription = censorText(description);

      await postService
        .addPost(censoredTitle, censoredDescription, img)
        .then(
          (response) => {
            console.log("frontend");
            Navigate("/profile");
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
          maxLength={20}
          minLength={5}
          type="text"
          name="title"
          id="title"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <label htmlFor="description">description</label>
        <input
          maxLength={500}
          type="description"
          name="description"
          id="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />


        <button type="submit">add Post</button>
      </form>
    </div>
  );
}

export default AddPost;
