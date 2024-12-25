import React, { useState } from 'react';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post?.likes || 0); // Default to 0 if undefined
  const [comments, setComments] = useState(Array.isArray(post?.comments) ? post.comments : []); // Ensure it's an array
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '15px',
      marginBottom: '15px',
      maxWidth: '600px',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
        <img
          src={post?.avatar || 'https://via.placeholder.com/50'}
          alt={`${post?.username || 'User'}'s avatar`}
          style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }}
        />
        <strong>{post?.username || 'Anonymous'}</strong>
      </div>
      <p>{post?.content || 'No content available.'}</p>
      {post?.image && (
        <img
          src={post.image}
          alt="Post content"
          style={{ width: '100%', borderRadius: '10px', marginTop: '10px' }}
        />
      )}
      <div style={{ marginTop: '10px', color: '#555' }}>
        <span>{likes} Likes</span> · <span>{comments.length} Comments</span>
      </div>
      <button
        onClick={handleLike}
        style={{
          marginTop: '10px',
          padding: '5px 10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Like
      </button>
      <div style={{ marginTop: '15px' }}>
        <h4>Comments</h4>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {comments.map((comment, index) => (
            <li key={index} style={{ marginBottom: '10px', background: '#f5f5f5', padding: '10px', borderRadius: '5px' }}>
              {comment}
            </li>
          ))}
        </ul>
        <form onSubmit={handleAddComment}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            style={{
              width: 'calc(100% - 20px)',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '5px',
              border: '1px solid #ddd',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '5px 10px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Comment
          </button>
        </form>
      </div>
    </div>
  );
};

export default PostCard;
