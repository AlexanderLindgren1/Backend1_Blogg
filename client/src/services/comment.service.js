import axios from 'axios';
import authHeader from './auth-header';

export async function getAllComments(postId) {
  try {
    const response = await axios.get(`http://localhost:5000/comments/${postId}/comments`);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch comments:', error.message);
    return [];
  }
}

export async function addComment(postId, content) {
  try {
    console.log(postId, content);
    const response = await axios.post(`http://localhost:5000/comments/${postId}/add`, { content }, { headers: authHeader() });
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Failed to add comment:', error.message);
    throw error;
  }
}

const commentService = {
  getAllComments,
  addComment
};

export default commentService;
