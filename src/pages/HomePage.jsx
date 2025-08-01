import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="papel-picado">
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
        <div className="papel-strip"></div>
      </div>
      
      <div className="hero-section">
        <div className="cat-logo">
          <div className="cat-face">
            <div className="cat-ears">
              <div className="ear left"></div>
              <div className="ear right"></div>
            </div>
            <div className="cat-eyes">
              <div className="eye left"></div>
              <div className="eye right"></div>
            </div>
            <div className="cat-nose"></div>
            <div className="cat-mouth"></div>
            <div className="sombrero">
              <div className="hat-base"></div>
              <div className="hat-brim"></div>
            </div>
          </div>
        </div>
        
        <h1 className="title">🐱 Cat-culator 🐱</h1>
        <p className="subtitle">Converting the world into cat units since forever!</p>
        
        <div className="cactus-decoration">
          <div className="cactus">
            <div className="cactus-body"></div>
            <div className="cactus-arm left"></div>
            <div className="cactus-arm right"></div>
          </div>
        </div>
      </div>
      
      <div className="conversion-categories">
        <h2>Choose Your Cat-venture!</h2>
        <div className="category-grid">
          <Link to="/length" className="category-card length">
            <div className="category-icon">📏</div>
            <h3>Length</h3>
            <p>Meters to cats laid head-to-tail</p>
          </Link>
          
          <Link to="/weight" className="category-card weight">
            <div className="category-icon">⚖️</div>
            <h3>Weight</h3>
            <p>Kilograms to fat cats</p>
          </Link>
          
          <Link to="/time" className="category-card time">
            <div className="category-icon">⏰</div>
            <h3>Time</h3>
            <p>Hours to cat naps</p>
          </Link>
          
          <Link to="/volume" className="category-card volume">
            <div className="category-icon">🥛</div>
            <h3>Volume</h3>
            <p>Liters to bowls of milk</p>
          </Link>
          
          <Link to="/random" className="category-card random">
            <div className="category-icon">🍌</div>
            <h3>Random</h3>
            <p>Bananas to cats (because why not?)</p>
          </Link>
        </div>
      </div>
      
      <div className="confetti">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="confetti-piece" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 5)]
          }}></div>
        ))}
      </div>
    </div>
  );
};

export default HomePage; 