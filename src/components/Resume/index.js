import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import TextSphere from '../TextSphere'

const Resume = () => {
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
              strArray={['S', 'k', 'i', 'l', 'l', 's ',]}
              idx={15}
            />
          </h1>
          <p>
          Passionate software engineer with expertise in Java, Python, C++, and JavaScript (including HTML, CSS, React) for web development. Proficient in backend technologies like Node.js for server-side programming. Skilled in databases, with strengths in SQL and MongoDB. Experienced with version control using Git and GitHub for collaborative development.
                    </p>
          
          <p>
          Adept at applying Agile methodologies and strong problem-solving skills to tackle challenges. Knowledgeable in algorithms, data structures, and test-driven development (TDD). Proven track record in establishing efficient CI/CD pipelines for testing and deployment. Effective communicator and collaborative team player, skilled in task management. Quick to embrace new technologies and challenges.
          </p>
          
          </div>
          <TextSphere />

          
          
          </div>


    </>
)
}
export default Resume
