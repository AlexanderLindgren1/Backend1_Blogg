import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/posts";

const getAllPublicPosts = () => {
  return axios.get("http://localhost:5000/posts/public");
};

const getAllPrivatePosts = () => {
  return axios.get("http://localhost:5000/posts/private", { headers: authHeader() });
};

const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
};

export default postService;