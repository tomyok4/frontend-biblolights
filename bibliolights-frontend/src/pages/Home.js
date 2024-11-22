import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import BookCard from '../components/BookCard';
import './Home.css';

const Home = () => {
  const books = [
    { title: 'Libro 1', author: 'Autor 1', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 2', author: 'Autor 2', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 3', author: 'Autor 3', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 4', author: 'Autor 4', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 5', author: 'Autor 5', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 6', author: 'Autor 6', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 7', author: 'Autor 7', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 8', author: 'Autor 8', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 9', author: 'Autor 9', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 10', author: 'Autor 10', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 11', author: 'Autor 9', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 12', author: 'Autor 10', img: 'https://via.placeholder.com/150' },
    { title: 'Libro 13', author: 'Autor 9', img: 'https://via.placeholder.com/150' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calcular libros a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = books.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(books.length / itemsPerPage);

  return (
    <div className="home">
      <Navbar />

      {/* Barra de búsqueda */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Buscar libros..."
          className="search-input"
        />
      </div>

      {/* Título "LIBROS" */}
      <h2 className="books-title">LIBROS</h2>

      {/* Contenido principal */}
      <div className="content">
        <div className="main">
          {/* Tarjetas de libros */}
          <div className="book-grid">
            {currentBooks.map((book, index) => (
              <BookCard key={index} {...book} />
            ))}
          </div>

          {/* Paginación */}
          <div className="pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                className={`page-button ${
                  currentPage === index + 1 ? 'active' : ''
                }`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>

        <Sidebar />
      </div>
    </div>
  );
};

export default Home;