import React from 'react';
import { posts } from '../data';
import PostCard from '../components/PostCard';

const Profile = () => {
  const user = {
    username: 'johndoe',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Frontend Developer | React Enthusiast',
  };

  const userPosts = posts.filter((post) => post.username === user.username);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '20px' }}>
        <img
          src={user.avatar}
          alt={`${user.username}'s avatar`}
          style={{ width: '100px', height: '100px', borderRadius: '50%' }}
        />
        <h2>{user.username}</h2>
        <p>{user.bio}</p>
      </div>
      <h3>Your Posts</h3>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {userPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Profile;
