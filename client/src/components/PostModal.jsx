import React, { useState, useEffect } from 'react';
import commentService from '../services/comment.service';

function PostModal(props) {
    const {post} = props
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const data = await commentService.getAllComments(post._id);
      setComments(data);
    };

    fetchComments();
  }, [post]);

  return (
    <div className="modalPost">
      <h2>{post.title}</h2>
      <div>
        {comments.map(comment => (
          <div key={comment._id}>
            <p>content: {comment.content}</p>
            <p>ID: {comment._id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostModal;
