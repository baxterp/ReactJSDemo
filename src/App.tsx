import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Products from './pages/Products';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/products" element={<Products />} />
          <Route path="/api" />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;