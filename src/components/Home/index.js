import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/J-test2.png';
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import LogoJ from '../../assets/images/J-test2.png'

const Home = () => {
    const nameArray = ['o', 's', 'e'];
    const jobArray = ['C', 'y', 'b', 'e', 'r', '', 'S', 'e', 'c', 'u', 'r', 'i', 't', 'y', '', 'e', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'];
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000); // Adjust the breakpoint as needed
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1000); // Adjust the breakpoint as needed
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass} 
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass} 
                strArray={jobArray}
                idx={15} />
                </h1>
                <h2>Cyber Security Engineer / Computer Science and Cyber Security Graduate</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                </div>

                {isMobile ? (
                    <img src={LogoJ} alt='J' className='logo-container' />
                ) : (
                    <img src={LogoJ} alt='J' className='logoj' />
                )}
            </div>
        </>
    );
}

export default Home;
