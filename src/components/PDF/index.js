import React, { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import File from '../../assets/images/Jose_Jimenez_Resume.pdf';

const Pdf = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['R', 'e', 's', 'u', 'm', 'e']}
              idx={15}
            />
          </h1>
          
        </div>
        <div className="pdf-container">
        <iframe src={File} title="PDF Viewer" width="50%" height="650px" />
      </div>
      </div>
      
      <Loader type="pacman" />
    </>
  );
};

export default Pdf;
