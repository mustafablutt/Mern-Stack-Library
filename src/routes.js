import { Routes, Route } from 'react-router-dom';

import Books from './components/Books';
import AddBook from './components/AddBook';

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/addbook" element={<AddBook />} />
    </Routes>
  );
};
