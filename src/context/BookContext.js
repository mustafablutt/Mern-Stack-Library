import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('/books');
      setBooks(response.data);
    } catch (error) {
      console.error('Kitapları çekerken hata oluştu!', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BookContext.Provider value={{ books, refreshBooks: fetchBooks }}>
      {children}
    </BookContext.Provider>
  );
};
