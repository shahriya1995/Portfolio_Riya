import React from "react";
import './Footer.css'
import {Link} from 'react-router-dom'
import {FaTypo3 , FaFacebook ,FaInstagram,FaYoutube,FaLinkedin,FaTwitter} from "react-icons/fa";
function Footer() {
    return(
        <div className="footer-container">
            <div className="footer-subscription">
                <p className="footer-subscription-heading">
                   Connect with Me!
                </p>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    <div className='footer-logo'>
                        <Link to='/' className='social-logo'>
                            RIYA SHAH
                            <FaTypo3 />
                        </Link>
                    </div>
                    <small className='website-rights'>RIYA SHAH © 2020</small>
                    <div className='social-icons'>
                        <Link
                            class='social-icon-link facebook'
                            to='/'
                            target='_blank'
                            aria-label='Facebook'
                        >
                            <FaFacebook />
                        </Link>
                        <Link
                            class='social-icon-link instagram'
                            to='/'
                            target='_blank'
                            aria-label='Instagram'
                        >
                            <FaInstagram />
                        </Link>
                        <Link
                            class='social-icon-link youtube'
                            to='/'
                            target='_blank'
                            aria-label='Youtube'
                        >
                          <FaYoutube />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='Twitter'
                        >
                            <FaTwitter />
                        </Link>
                        <Link
                            class='social-icon-link twitter'
                            to='/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )

}
export default Footer
