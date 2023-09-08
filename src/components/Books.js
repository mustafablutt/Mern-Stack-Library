import React, { useContext } from 'react';
import { lendBook, deleteBook, backBook } from '../services/apiService';
import { BookContext } from '../context/BookContext';
const Books = () => {
  const { books, refreshBooks } = useContext(BookContext);
  return (
    <div className="container mt-5">
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Book Name</th>
            <th scope="col">Author</th>
            <th scope="col">Department</th>
            <th scope="col">Quantity</th>
            <th scope="col" colSpan="3">
              Process
            </th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => {
            return (
              <tr key={index}>
                <td>{book._id}</td>
                <td
                  data-toggle="tooltip"
                  data-placement="top"
                  title={book.comments}
                >
                  {book.bookName}
                </td>
                <td>{book.author}</td>

                <td>{book.department}</td>
                <td>{book.quantity}</td>
                <td>
                  <button
                    onClick={() =>
                      deleteBook(book._id, book.bookName, refreshBooks)
                    }
                    className="btn btn-primary"
                  >
                    DELETE
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      lendBook(book._id, book.bookName, refreshBooks)
                    }
                    className="btn btn-primary"
                  >
                    LAND
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      backBook(book._id, book.bookName, refreshBooks)
                    }
                    className="btn btn-primary"
                  >
                    BACK
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
