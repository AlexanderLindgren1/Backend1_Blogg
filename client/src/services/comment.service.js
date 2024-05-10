// commentService.js
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

// Object containing all service functions
const commentService = {
  getAllComments
};

export default commentService;
