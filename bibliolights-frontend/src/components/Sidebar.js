import React from 'react';
import './Sidebar.css';

function Sidebar({ onCategoryClick }) {
  const categories = ['Todos', 'Python', 'React', 'Node.js'];

  return (
    <div className="sidebar">
      <h2>Busque Libros Por Tema</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index} onClick={() => onCategoryClick(category)}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;