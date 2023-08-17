import { useEffect, useState } from 'react'
import {faHtml5,faJsSquare,faReact,} from '@fortawesome/free-brands-svg-icons'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import python from '../../assets/images/pythonlogo.png'
import java from '../../assets/images/java.png'
import cplusplus from '../../assets/images/c.png'

const About = () => {
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
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I'm Jose Jimenez – a student at California State University, Long Beach, aiming to become a Software Engineer. With a major in Computer Science and a minor in Cyber Security, I'm delving into Full Stack Development.          
          
          </p>
          <p align="LEFT">
          Coding with Python, Java, and C++ is where I find my stride. Complex challenges ignite my curiosity, driving me to craft solutions that put users at the center.          </p>
          
          <p>
          As the software landscape evolves at lightning speed, I'm committed to refining my skills and adapting to the latest advancements. I see each challenge as an opportunity to innovate, and I'm excited to shape the future of technology by crafting solutions that make a difference.          
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <img src={python} className='python-image' alt='python'/>
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <img src={cplusplus} className='cplusplus-image' alt='c++'/>
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <img src={java} className='java-image' alt='java'/>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default About
