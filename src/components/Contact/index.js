import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
        setLetterClass('text-animate-hover');
        }, 3000);
  
    return () => clearTimeout(timeoutId);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('',"",refForm.current,"") //add email code ,email template settings,publickey(account)
    .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                Feel free to reach out to me via email at j-jimenez.22@outlook.com or connect with me on <a href='https://www.linkedin.com/in/jose-jimenez01/' target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>LinkedIn</a>
                . I'm excited to discuss potential collaborations, projects, 
                or any opportunities in the field of software engineering.
                </p>

                <div className='contact-form'>
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='name' placeholder='Name' required/>
                            </li>
                            <li className='half'>
                                <input type='email' name='email' placeholder='Email' required/>
                            </li>
                            <li>
                                <input placeholder='Subject' type='text' name='subject' required/>
                            </li>
                            <li>
                                <textarea placeholder='Message' name='message' required></textarea>
                            </li>
                            <li>
                            <input type='submit' className='flat-button' value='SEND' />
                            </li>
                            
                        </ul>
                    </form>
                </div>
                </div>
            </div>
        </>
    )
}

export default Contact