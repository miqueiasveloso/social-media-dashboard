import React, { useState } from 'react';
import { posts } from '../data';

const CreatePost = ({ onAddPost }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: posts.length + 1,
      username: 'johndoe',
      avatar: 'https://i.pravatar.cc/150?img=3',
      content,
      image,
      likes: 0,
      comments: 0,
    };
    onAddPost(newPost);
    setContent('');
    setImage('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Image URL (optional)"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button type="submit" style={{
        padding: '10px 20px',
        backgroundColor: '#28a745',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        Post
      </button>
    </form>
  );
};

export default CreatePost;
