import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css'; 

const Menu = ({ cat }) => {
  const categories = ['Technology', 'Health', 'Lifestyle', 'Education']; 

  return (
    <div className="menu">
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <Link to={`/?cat=${category}`} className={cat === category ? 'active' : ''}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
