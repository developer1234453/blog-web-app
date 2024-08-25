import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PostList.css';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/posts');
        console.log('Posts fetched:', res.data); 
        setPosts(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPosts();
  }, []);


  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://blog-backend-aqtm.onrender.com/api/posts/${postId}`);
      setPosts(posts.filter(post => post._id !== postId)); 
    } catch (err) {
      console.error('Failed to delete post:', err);
    }
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <div key={post._id} className="post-item">
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
          <Link to={`/post/${post._id}`}>Read More</Link>
          <div className="post-actions">
            <button 
              className="edit-button"
              onClick={() => navigate(`/edit/${post._id}`, { state: post })}
            >
              Edit
            </button>
            <button 
              className="delete-button"
              onClick={() => handleDelete(post._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
