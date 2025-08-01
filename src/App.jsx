import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ConverterPage from './pages/ConverterPage';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <Router>
      <div className="App">
        {isLoading ? (
          <LoadingScreen onComplete={handleLoadingComplete} />
        ) : (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:category" element={<ConverterPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
