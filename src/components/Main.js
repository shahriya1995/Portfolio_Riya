import React from "react";
import './Main.css';
import './Footer.css'
import SocialLinks from "./SocialLinks";
function Main() {
    return(


        <header className="hero">
            <div className="section-center hero-center">
                <article className="hero-info">
                    <div className="underline"></div>
                    <h1>i'm riya shah</h1>
                    <h3>Software Developer</h3>

                    {/*<a href="/contact" className="btn hero-btn">hire me</a>*/}
                    <a className="btn center-btn" href="https://drive.google.com/file/d/1Wh7tvL93U-l11Ae0Psb-eb0AsPvdt-ZF/view?usp=sharing">RESUME</a>


                    <br />
                    <br />
                    <br />
                    <div className='social-icons' >
                        <SocialLinks styleClass="footer-links" style={{color:'white'}}></SocialLinks>
                    </div>
                </article>
                <article className="hero-img">
                    <img src="../../images/me-5.png" className="hero-photo" alt="john doe"/>
                </article>
            </div>
        </header>
    )

}
export default Main;
