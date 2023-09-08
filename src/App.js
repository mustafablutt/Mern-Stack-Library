import './App.css';
import Navbar from './components/Navbar';
import { BookProvider } from './context/BookContext';
import { BrowserRouter } from 'react-router-dom';
import { RouteList } from './routes';

function App() {
  return (
    <div className="App">
      <BookProvider>
        <BrowserRouter>
          <Navbar />
          <RouteList />
        </BrowserRouter>
      </BookProvider>
    </div>
  );
}

export default App;
