import React from 'react';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navigation />
      <main className="flex-grow-1">
        <MainContent />
      </main>
      <Footer />
    </div>
  );
}

export default App;