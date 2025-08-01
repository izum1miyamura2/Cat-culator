import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { convertToCatUnits, getCategoryInfo, getRandomLoadingMessage } from '../utils/conversionLogic';
import '../styles/ConverterPage.css';

const ConverterPage = () => {
  const { category } = useParams();
  const [inputValue, setInputValue] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [showSparkles, setShowSparkles] = useState(false);

  const categoryInfo = getCategoryInfo(category);

  useEffect(() => {
    if (categoryInfo.units.length > 0) {
      setSelectedUnit(categoryInfo.units[0]);
    }
  }, [category]);

  const handleConvert = () => {
    if (!inputValue || !selectedUnit) return;

    setIsLoading(true);
    setShowSparkles(false);
    setLoadingMessage(getRandomLoadingMessage());

    // Simulate loading time
    setTimeout(() => {
      const conversionResult = convertToCatUnits(parseFloat(inputValue), category, selectedUnit);
      setResult(conversionResult);
      setIsLoading(false);
      setShowSparkles(true);
      
      // Hide sparkles after 3 seconds
      setTimeout(() => setShowSparkles(false), 3000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleConvert();
    }
  };

  return (
    <div className="converter-page">
      <div className="papel-picado">
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
      </div>

      <div className="converter-container">
        <Link to="/" className="back-button">
          <span>🏠</span> Back to Home
        </Link>

        <div className="category-header">
          <div className="category-icon">{categoryInfo.icon}</div>
          <h1>{categoryInfo.name} Converter</h1>
          <p>Convert your {categoryInfo.name.toLowerCase()} into cat units!</p>
        </div>

        <div className="converter-form">
          <div className="input-group">
            <label htmlFor="value-input">Enter your value:</label>
            <input
              id="value-input"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Enter a number..."
              className="value-input"
            />
          </div>

          <div className="input-group">
            <label htmlFor="unit-select">Select unit:</label>
            <select
              id="unit-select"
              value={selectedUnit}
              onChange={(e) => setSelectedUnit(e.target.value)}
              className="unit-select"
            >
              {categoryInfo.units.map(unit => (
                <option key={unit} value={unit}>
                  {unit.charAt(0).toUpperCase() + unit.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <button 
            onClick={handleConvert}
            disabled={!inputValue || !selectedUnit || isLoading}
            className="convert-button"
          >
            {isLoading ? 'Converting...' : '🐱 Convert to Cats! 🐱'}
          </button>
        </div>

        {isLoading && (
          <div className="loading-section">
            <div className="loading-cat">
              <div className="cat-body"></div>
              <div className="cat-tail"></div>
            </div>
            <p className="loading-message">{loadingMessage}</p>
          </div>
        )}

        {result && !isLoading && (
          <div className={`result-section ${showSparkles ? 'sparkles' : ''}`}>
            <div className="result-card">
              <div className="result-header">
                <h2>Your Cat-culation Result!</h2>
                <div className="bouncing-cat">🐱</div>
              </div>
              
              <div className="result-content">
                <div className="conversion-display">
                  <span className="original-value">
                    {result.originalValue} {result.originalUnit}
                  </span>
                  <span className="equals">=</span>
                  <span className="cat-result">
                    {result.result} cats
                  </span>
                </div>
                
                <p className="result-description">{result.description}</p>
                
                <div className="cat-illustration">
                  <div className="cat-stack">
                    {[...Array(Math.min(Math.ceil(result.result), 10))].map((_, i) => (
                      <div 
                        key={i} 
                        className="stacked-cat"
                        style={{
                          animationDelay: `${i * 0.1}s`,
                          left: `${(i % 3) * 20}px`,
                          top: `${Math.floor(i / 3) * 30}px`
                        }}
                      >
                        🐱
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="category-navigation">
          <h3>Try other conversions:</h3>
          <div className="nav-buttons">
            <Link to="/length" className={`nav-button ${category === 'length' ? 'active' : ''}`}>
              📏 Length
            </Link>
            <Link to="/weight" className={`nav-button ${category === 'weight' ? 'active' : ''}`}>
              ⚖️ Weight
            </Link>
            <Link to="/time" className={`nav-button ${category === 'time' ? 'active' : ''}`}>
              ⏰ Time
            </Link>
            <Link to="/volume" className={`nav-button ${category === 'volume' ? 'active' : ''}`}>
              🥛 Volume
            </Link>
            <Link to="/random" className={`nav-button ${category === 'random' ? 'active' : ''}`}>
              🍌 Random
            </Link>
          </div>
        </div>
      </div>

      {showSparkles && (
        <div className="sparkles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random() * 2}s`
              }}
            >
              ✨
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ConverterPage; 