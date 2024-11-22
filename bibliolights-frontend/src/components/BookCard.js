import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, img }) => {
  return (
    <div className="book-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>by: {author}</p>
      <button>Más detalles</button>
    </div>
  );
};

export default BookCard;
