import React from "react";
import {Button} from "./Button";
import './Main.css';


function Main() {
    return(
        <div className='hero-container'>
            {/*<video src='../../videos/video-2.mp4' autoPlay loop muted />*/}
            <h1> Hello! My name is Riya Shah</h1><br />
            <p>SOFTWARE ENGINEER</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>RESUME</Button>
            </div>
        </div>
    )

}
export default Main;
