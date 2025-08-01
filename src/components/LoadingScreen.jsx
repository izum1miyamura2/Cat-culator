import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

const LoadingScreen = ({ onComplete }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [progress, setProgress] = useState(0);

  const messages = [
    "Calculating Cat-ness... 🐱",
    "Counting Meowgabytes... 💻",
    "Tuning Catitudes... 🎵",
    "Processing Purr-formance... ⚡",
    "Measuring Feline Physics... 🔬",
    "Converting to Cat Units... 📊",
    "Summoning Cat Spirits... 👻",
    "Brewing Cat Coffee... ☕",
    "Warming Up Cat Engines... 🔥",
    "Preparing Cat-tastic Results... ✨"
  ];

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          clearInterval(messageInterval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 100);

    return () => {
      clearInterval(messageInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="loading-screen">
      <div className="loading-background">
        <div className="floating-cats">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="floating-cat"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              🐱
            </div>
          ))}
        </div>
      </div>

      <div className="loading-content">
        <div className="cat-logo-large">
          <div className="cat-face-large">
            <div className="cat-ears-large">
              <div className="ear-large left"></div>
              <div className="ear-large right"></div>
            </div>
            <div className="cat-eyes-large">
              <div className="eye-large left"></div>
              <div className="eye-large right"></div>
            </div>
            <div className="cat-nose-large"></div>
            <div className="cat-mouth-large"></div>
            <div className="sombrero-large">
              <div className="hat-base-large"></div>
              <div className="hat-brim-large"></div>
            </div>
          </div>
        </div>

        <h1 className="loading-title">🐱 Cat-culator 🐱</h1>
        <p className="loading-message">{messages[currentMessage]}</p>

        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{progress}%</span>
        </div>

        <div className="loading-tips">
          <p>💡 Tip: Cats are excellent at math, especially when it involves naps!</p>
        </div>
      </div>

      <div className="confetti-loading">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="confetti-piece-loading"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7'][Math.floor(Math.random() * 5)]
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen; 