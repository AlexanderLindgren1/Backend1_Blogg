import React, { useState, useEffect } from 'react';
import commentService from '../services/comment.service';

function PostModal(props) {
    const { post } = props;
    const [comments, setComments] = useState([]);
    const [newCommentContent, setNewCommentContent] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            const data = await commentService.getAllComments(post._id);
            setComments(data);
        };

        fetchComments();
    }, [post]);

    const handleAddComment = async () => {
        
        if (newCommentContent.trim() !== '') {
            await commentService.addComment(post._id, newCommentContent);

            const updatedComments = await commentService.getAllComments(post._id);
            setComments(updatedComments);
            setNewCommentContent('');
        }
    };

    return (
        <div className="modalPost">
            <h2>{post.title}</h2>
            <div>
                <input
                    type="text"
                    value={newCommentContent}
                    onChange={(e) => setNewCommentContent(e.target.value)}
                    placeholder="Add a comment..."
                />
                <button onClick={handleAddComment}>Add Comment</button>
            </div>
            <div className='commentContainer'>
                {comments.map(comment => (
                    <div key={comment._id} className='comment'>
                        <p>Content: {comment.content}</p>
                        <p>ID: {comment._id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostModal;
