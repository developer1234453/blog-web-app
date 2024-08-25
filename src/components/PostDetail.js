import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`https://blog-backend-aqtm.onrender.com/posts/api/${id}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetail;
