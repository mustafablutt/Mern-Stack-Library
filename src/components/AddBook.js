import React, { useState, useContext } from 'react';
import axios from 'axios';
import { BookContext } from '../context/BookContext';
import { addNewBook } from '../services/apiService';

const AddBook = () => {
  const { refreshBooks } = useContext(BookContext);

  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [quantity, setQuantity] = useState('');
  const [department, setDepartment] = useState('Departments');
  const [comments, setComments] = useState('');

  return (
    <div>
      <div className="container w-50 mt-5 border border-secondary">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="bookName"
            name="bookName"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
          />
          <label htmlFor="floatingInput">Book Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <label htmlFor="floatingInput">Author</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="number"
            className="form-control"
            id="floatingInput"
            placeholder="quantity"
            name="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <label htmlFor="floatingInput">Quantity</label>
        </div>
        <div className="form-floating mb-3">
          <select
            className="form-select"
            aria-label="Floating label select example"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="Departments">Departments</option>
            <option value="History & Criticism">History & Criticism</option>
            <option value="Religious">Religious</option>
            <option value="Music">Music</option>
            <option value="Study & Teaching">Study & Teaching</option>
          </select>
          <label htmlFor="floatingSelect">Select Book Department</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          ></textarea>
          <label htmlFor="floatingTextarea">Comments</label>
        </div>
        <button
          type="button"
          className="btn btn-primary mb-3"
          onClick={() =>
            addNewBook(
              {
                bookName,
                author,
                quantity,
                department,
                comments,
              },
              refreshBooks
            )
          }
        >
          Add Book
        </button>
      </div>
    </div>
  );
};

export default AddBook;
