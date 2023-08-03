import React, { useState, useEffect } from 'react';
import '../styles/RocketStyle.css';
import rocketImage from './rocket.png';

export default function Home() {
  const [text, setText] = useState('');

  useEffect(() => {
    const name = 'Jose Jimenez Software Engineer';
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      setText(name.slice(0, currentIndex + 1));
      currentIndex++;

      if (currentIndex === name.length) {
        clearInterval(intervalId);
      }
    }, 200); // Adjust the interval (in milliseconds) to control typing speed

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function stars() {
    let count = 20;
    let starsElements = [];
    let i = 0;
    while (i < count) {
      let star = (
        <i
          key={i}
          style={{
            left: Math.floor(Math.random() * window.innerWidth) + 'px',
            width: '1px',
            height: 50 + Math.random() * 100 + 'px',
            animationDuration: Math.random() + 's',
          }}
        ></i>
      );
      starsElements.push(star);
      i++;
    }
    return starsElements;
  }

  return (
    <div>
      <h1 className="line-1 anim-typewriter">{text}</h1>
      <div className="scene">
        <div className="rocket">
          <img src={rocketImage} alt="Rocket" />
        </div>
        {stars()}
      </div>
    </div>
  );
}
