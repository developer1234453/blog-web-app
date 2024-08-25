// src/api.js
const BASE_URL = 'http://localhost:5000/api';

export const fetchPosts = async () => {
  const response = await fetch(`${BASE_URL}/posts`);
  if (!response.ok) throw new Error('Failed to fetch posts');
  return await response.json();
};

export const fetchPostById = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`);
  if (!response.ok) throw new Error('Failed to fetch post');
  return await response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) throw new Error('Failed to create post');
  return await response.json();
};

export const updatePost = async (id, postData) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  });
  if (!response.ok) throw new Error('Failed to update post');
  return await response.json();
};

export const deletePost = async (id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw new Error('Failed to delete post');
};
