import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:5000/posts/public";


const getAllPublicPosts = () => {
  return axios.get("http://localhost:5000/posts/public",);
};
const addNewPosterPublic = (title, description, img, test) => {


  return axios.post("http://localhost:5000/posts/public",
    { title, description, img , test},  {headers:authHeader()})
    .then(response => {
      console.log("data",response.data);
      console.log("\n  Connection to the database this is the img", img);

     
return response.data
    });
};

const getAllPrivatePosts = () => {
  return axios.get("http://localhost:5000/posts/private", { headers: authHeader() });
};


const updatePost = async (updatedPost) => {
  const { title, description, id } = updatedPost
  console.log("title of the update", title);
  console.log("des of the update", description);
  console.log("this is the ID of the update", id);
  await axios.put(`http://localhost:5000/posts/public/${id}`,
    { title, description }).then((response) => {
      console.log(response.data);

      return response.data
    });


};





const postService = {
  getAllPublicPosts,
  getAllPrivatePosts,
  addNewPosterPublic,
  updatePost
};

export default postService;