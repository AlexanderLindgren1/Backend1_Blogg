import axios from "axios";
import authHeader from "./auth-header";


const getAllPublicPosts = () => {
  return axios.get("http://localhost:5000/posts/public",);
};
const addPost = async (title, description, img, test) => {
  const response = await axios.post("http://localhost:5000/posts/profile",
    { title, description, img }, { headers: authHeader() });
  console.log("data", response.data);
  console.log("\n  Connection to the database this is the img", img);
  return response.data;
};

const getAllProfilePosts = () => {
  return axios.get("http://localhost:5000/posts/profile", { headers: authHeader() });
};


const updatePost = async (updatedPost) => {
  const { title, description, id } = updatedPost;

  try {
    const response = await axios.put(
      `http://localhost:5000/posts/profile/${id}`,
      { title, description },
      { headers: authHeader() }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error updating post:", error);
    throw error;
  }
};





const postService = {
  getAllPublicPosts,
  getAllProfilePosts,
  addPost,
  updatePost
};

export default postService;