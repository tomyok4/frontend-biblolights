import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import BookCard from '../components/BookCard';
import './Home.css';

const Home = () => {
  const allBooks = [
    { title: 'Libro 1', author: 'Autor 1', img: 'https://via.placeholder.com/150', theme: 'Python' },
    { title: 'Libro 2', author: 'Autor 2', img: 'https://via.placeholder.com/150', theme: 'React' },
    { title: 'Libro 3', author: 'Autor 3', img: 'https://via.placeholder.com/150', theme: 'Node.js' },
    { title: 'Libro 4', author: 'Autor 4', img: 'https://via.placeholder.com/150', theme: 'Python' },
    { title: 'Libro 5', author: 'Autor 5', img: 'https://via.placeholder.com/150', theme: 'React' },
    { title: 'Libro 6', author: 'Autor 6', img: 'https://via.placeholder.com/150', theme: 'Node.js' },
  ];

  const [selectedTheme, setSelectedTheme] = useState('Todos'); // Estado para el tema seleccionado
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  // Manejar cambio de categoría
  const handleCategoryClick = (theme) => {
    setSelectedTheme(theme);
  };

  // Manejar búsqueda
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filtrar libros
  const filteredBooks = allBooks.filter((book) => {
    const matchesTheme = selectedTheme === 'Todos' || book.theme === selectedTheme;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm);
    return matchesTheme && matchesSearch;
  });

  return (
    <div className="home">
      <Navbar />
      <div className="content">
        <Sidebar onCategoryClick={handleCategoryClick} />
        <div className="main-content">
          <h1>Libros</h1>
          <input
            type="text"
            placeholder="Buscar por título..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-bar"
          />
          <div className="book-grid">
            {filteredBooks.map((book, index) => (
              <BookCard key={index} title={book.title} author={book.author} img={book.img} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;