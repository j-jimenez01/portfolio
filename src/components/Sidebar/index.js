import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoJ from '../../assets/images/J-test2.png'
import LogoJose from '../../assets/images/Jose-4.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faHome, faUser, faLaptopCode, faGears, faFilePdf,faBars, faClose} from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () => {

    // for mobile app
    const [showNav,setShowNav] = useState(false);

    return (
    <div className = 'nav-bar'>
        <Link className="logo" to='/'>
            <img src={LogoJ} alt='logo' />
            <img className='sub-logo' src={LogoJose} alt='Jose' />
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink onClick={() => setShowNav(false)}  exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#ededed' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)}  exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#ededed' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)}  exact="true" activeclassname="active" className="projects-link" to="/projects">
                <FontAwesomeIcon icon={faLaptopCode} color='#ededed' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)}  exact="true" activeclassname="active" className="resume-link" to="/resume">
                <FontAwesomeIcon icon={faGears} color='#ededed' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)}  exact="true" activeclassname="active" className="pdf-link" to="/pdf">
                <FontAwesomeIcon icon={faFilePdf} color='#ededed' />
            </NavLink>
            <NavLink onClick={() => setShowNav(false)}  exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color='#ededed' />
            </NavLink>

            {/* for mobile */}
            <FontAwesomeIcon
        onClick={() => setShowNav(false)} 
        icon={faClose}
        color='#ffd700'
        size='3x'
        className='close-icon'
        />
        </nav>
        <ul>
            <li>
                <a 
                    href ="https://www.linkedin.com/in/jose-jimenez01/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faLinkedin} color='#ededed' />
                </a>
            </li>
            <li>
                <a 
                    href ="https://github.com/j-jimenez01"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FontAwesomeIcon icon={faGithub} color='#ededed' />
                </a>
            </li>
        </ul>

        {/* for mobile */}
        <FontAwesomeIcon
        onClick={() => setShowNav(true)} 
        icon={faBars}
        color='#ffd700'
        size='3x'
        className='hamburger-icon'
        />

    </div>
)}

export default Sidebar