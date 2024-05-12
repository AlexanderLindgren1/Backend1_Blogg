import axios from 'axios';

// Function to fetch all comments using Axios
export async function getAllComments(postId) {
  try {
    const response = await axios.get(`http://localhost:5000/comments/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
    return [];
  }
}

// Function to add a new comment using Axios
export async function addComment(postId, content) {
  try {
console.log(postId, content);
    const response = await axios.post(`http://localhost:5000/comments/${postId}/add`, { content });
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to add comment:', error.message);
    throw error;
  }
}

// Object containing all service functions
const commentService = {
  getAllComments,
  addComment
};

export default commentService;
