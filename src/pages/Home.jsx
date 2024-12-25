import React, { useState } from 'react';
import { posts as initialPosts } from '../data';
import PostCard from '../components/PostCard';
import CreatePost from '../components/CreatePost';
import Notification from '../components/Notification';

const Home = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [notification, setNotification] = useState('');

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setNotification('Post created successfully!');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1>Home Feed</h1>
      <CreatePost onAddPost={addPost} />
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <Notification message={notification} onClose={() => setNotification('')} />
    </div>
  );
};

export default Home;
