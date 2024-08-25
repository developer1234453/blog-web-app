import React, { useEffect, useState, useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';
import DOMPurify from 'dompurify';
import Edit from '../img/edit.png';
import Delete from '../img/delete.png';
import Menu from '../components/Menu';

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const postId = location.pathname.split('/')[2];
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`https://blog-backend-aqtm.onrender.com/api/posts/${postId}`);
        setPost(res.data);
      } catch (err) {
        console.error('Error fetching post:', err);
      }
    };
    fetchData();
  }, [postId]);

  const handleDelete = async () => {
    console.log('Delete button clicked');
    try {
      await axios.delete(`https://blog-backend-aqtm.onrender.com/api/posts/${postId}`);
      console.log('Post deleted successfully');
      navigate('/');
    } catch (err) {
      console.error('Failed to delete the post:', err);
    }
  };

  const handleEdit = () => {
    console.log('Edit button clicked');
    navigate(`/write?edit=${post._id}`, { state: post });
  };

  return (
    <div className="single">
      <div className="content">
        {post.img && <img src={`../upload/${post.img}`} alt={post.title} />}
        <div className="user">
          {post.userImg && <img src={post.userImg} alt={post.username} />}
          <div className="info">
            <span>{post.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>
          {currentUser?.username === post.username && (
            <div className="edit">
              <img onClick={handleEdit} src={Edit} alt="Edit" />
              <img onClick={handleDelete} src={Delete} alt="Delete" />
            </div>
          )}
        </div>
        <h1>{post.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.desc),
          }}
        ></p>
      </div>
      <Menu cat={post.cat} />
    </div>
  );
};

export default Single;
