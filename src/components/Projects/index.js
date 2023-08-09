import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import React from 'react'


const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

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
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <p>
          wordswordswordswordswordswordswordswordswordswordswordswords
          wordswordswordswordswordswordswordswordswordswordswordswords
          wordswordswordswordswordswordswordswordswordswordswordswords
          </p>
        </div>
        {/* right side of the page */}






        </div>
        <Loader type="pacman" />
        </>
  )
}

export default Projects


