import React, { useContext } from 'react';
import axios from 'axios';
import { BookContext } from '../context/BookContext';

export const lendBook = async (id, name, refreshBooks) => {
  await axios.put('/lend/' + id);
  alert(`${name} is lended`);
  refreshBooks();
};

export const deleteBook = async (id, name, refreshBooks) => {
  await axios.delete('/delete/' + id);
  alert(`${name} is deleted`);
  refreshBooks();
};

export const backBook = async (id, name, refreshBooks) => {
  await axios.put('/back/' + id);
  alert(` ${name} is back`);
  refreshBooks();
};

export const addNewBook = async (bookDetails, refreshBooks) => {
  try {
    await axios.post('/newbook', bookDetails);
    alert('Book Adding Successful!');
    refreshBooks();
  } catch (error) {
    console.error('Kitap eklerken hata oluştu!', error);
    alert('Book could not be added!');
  }
};
