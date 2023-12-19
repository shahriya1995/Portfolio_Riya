import React from "react";
import './About.css'
import '../Main.css'
import '../Project_Pages/ML_Projects.css'


function About() {
    return(
        <>
        <header className="mlprojects">
            <div className="mlprojects__section">
                <h1>About Me</h1>
                {/*<h3>{props.subtitle}</h3>*/}
                <div className="mlprojects__underline"></div>
                <a className="btn center-btn" href="https://drive.google.com/file/d/18w4R2lbfirjLtk3oIDNSB3iA89_1A0dk/view?usp=sharing">RESUME</a>

            </div>
        </header>

        <div class="mlcontainer">
            <div className="article">
                <div className="mlcontainer__head">
                    <h3>Hello! I am Riya Shah</h3>
                    {/*<h2>article #1</h2>*/}
                </div>
                <div className="mlcontainer__body">
                    <p className="mlcontainer__quote"></p>
                    <p>I am a Software developer based in California, USA. I Graduated with a Master's degree in Computer Science from California State University-Sacramento. I have 3+ years of hands-on experience designing, developing, and implementing full-stack applications and solutions using a range of technologies and programming languages. My interests include software design and development, web development, artificial intelligence, and machine learning. Seeking to leverage broad development experience and hands-on technical expertise in a challenging role as a Full Stack Developer.</p>

                </div>

            </div>
            <hr />
            <div className="article">
                <div className="mlcontainer__head">
                    <h3>Education</h3>
                    {/*<h2>article #1</h2>*/}
                </div>
                <div className="mlcontainer__body">
                    <p className="mlcontainer__quote"></p>
                    <p><b>Masters in Computer Science</b>, California State University Sacramento.</p>
                    <p> Aug 2017 - May 2020</p> <br />
                    <p><b>Bachelor's  in Computer Engineering</b>, University of Pune.</p>
                    <p> Aug 2012 - May 2016</p>
                </div>

            </div>
            <hr />
            <div className="article">
                <div className="mlcontainer__head">
                    <h3>Technical Skills</h3>
                    {/*<h2>article #1</h2>*/}
                </div>
                <div className="mlcontainer__body">
                    <div className="mlcontainer__about">
                    <ul>
                        <li>Python</li>
                        <li>React JS / Redux</li>
                        <li>Javascript (ES6 +)</li>
                        <li>Git</li>
                        <li>Django / Flask</li>
                        <li>Tensorflow</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                    </ul>

                    </div>
                </div>

            </div>
            <hr />

            <div className="article">
                <div className="mlcontainer__head">
                        <h3>Publications</h3>
                    {/*<h2>article #1</h2>*/}
                </div>
                <div className="mlcontainer__body">
                    <p className="mlcontainer__quote"></p>
                    <p><b>Comparison of E-commerce Products using web mining</b></p>
                    <i><p> International Journal of Scientific and Research Publications, Volume 6, Issue 5, May 2016</p></i>
                </div>

            </div>
            <hr />


        </div>

</>

    )

}
export default About
