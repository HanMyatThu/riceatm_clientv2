import React, { useState, useRef } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin,faFacebook,faChrome} from '@fortawesome/free-brands-svg-icons'
import {Overlay, Tooltip} from 'react-bootstrap'

const Footer = () => {
    const [show,setShow] = useState(false);
    const target = useRef(null);
    const redirectFb = () => {
        window.open('https://www.facebook.com/welovehlaingtharyar','_blank');
    }
    const redirectWeb = () => {
        window.open('https://www.pleodata.com','_blank');
    }
    const redirectMyPage =() => {
        window.open('https://www.linkedin.com/in/han-myat-thu-879046182','_blank');
    } 
    const showThanks = () => {
        setShow(!show)
    }
   
    return (
        <div className='footer-div'>
             <footer className="footer-distributed">
                <div className="footer-left">
                    <p className="footer-links">
                        <span className='mr-5' onClick={redirectFb}><FontAwesomeIcon icon={faFacebook} /></span>
                        <span className='mr-5' onClick={redirectWeb}><FontAwesomeIcon icon={faChrome} /></span>
                        <span className='mr-5' onClick={redirectMyPage}><FontAwesomeIcon icon={faLinkedin} /></span>
                        <span className='mr-5' ref={target} onClick={showThanks}><FontAwesomeIcon icon={faQuestion} /></span>
                        <Overlay target={target.current} show={show} placement="right">
                            {(props) => (
                            <Tooltip id="overlay-example" {...props}>
                                Thanks to Everyone who involved in this project.
                            </Tooltip>
                            )}
                        </Overlay>
                    </p>
                    <p className='myPage'>
                        Powered By 
                        <span className='ml-1' onClick={() => window.open('https://www.kineticmyanmar.com','_blank')}>
                            Kinetic Myanmar,
                        </span>
                        <span className='ml-1' onClick={() => window.open('https://www.pleodata.com','_blank')}>
                            PleoData Myanmar &
                        </span>
                        <span className='ml-1' onClick={() => window.open('http://www.myanmartrilliongroup.com','_blank')}>
                            Myanmar Trillion Group.
                        </span>
                        <br></br>
                        Developed By
                        <span classname='ml-1' onClick={() => window.open('https://www.linkedin.com/in/aye-chan-a75724173','_blank')}>
                            Aye Chan &
                        </span>
                        <span onClick={() => window.open('https://www.linkedin.com/in/han-myat-thu-879046182','_blank')}>
                            Draz
                        </span>
                    </p>
                </div>
                </footer>
        </div>
    )
} 


export default Footer