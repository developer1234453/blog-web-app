import React, { useState } from 'react';
import { createPost } from '../api';

const Write = () => {
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, excerpt, content });
      alert('Post created successfully!');
    } catch (error) {
      console.error('Failed to create post:', error);
      alert('Failed to create post');
    }
  };

  return (
    <div className="write">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input 
          id="title"
          type="text" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <label htmlFor="excerpt">Excerpt</label>
        <input 
          id="excerpt"
          type="text" 
          placeholder="Excerpt" 
          value={excerpt} 
          onChange={(e) => setExcerpt(e.target.value)} 
          required 
        />
        <label htmlFor="content">Content</label>
        <textarea 
          id="content"
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Write;
