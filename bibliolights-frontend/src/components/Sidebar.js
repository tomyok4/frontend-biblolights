import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Busque Libros Por Tema</h2>
      <ul>
        <li>Python</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    </div>
  );
}

export default Sidebar;