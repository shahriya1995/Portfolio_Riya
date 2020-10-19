import React from "react";
import './ML_Projects.css'
// import {FaExternalLinkAlt , FaGithubSquare,FaNewspaper  } from "react-icons/fa";
// import {GrHeroku} from "react-icons/gr"
// import {Project_Data} from "../projects/Features_projects_list";
// import BlogItem from "../projects/BlogItem";

function ML_Projects(props) {
    return (
        <>
        <header className="projects-hero">
            <div className="section-title">
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>

                <div className="underline"></div>
                <div className="art-body" align='center'>
                    {props.icons_link.map((value,index) => {
                        return (
                            <a href={value} target="_blank" key={index} >
                                {props.icons[index]}
                            </a>
                        )
                    })}
                </div>
            </div>
        </header>
            <div className="ml_container">
                <div className="article">
                    <div className="art-head">
                        <h3>{props.proj_title}</h3>
                        {/*<h2>article #1</h2>*/}
                    </div>
                    <br/>
                    <div className="art-body">
                        <p className="quote">{props.quote}</p>
                        <p>{props.p1}</p>

                         </div>

                </div>
                <hr/>
                    <div className="article">
                        <div className="art-head">
                            <h3>{props.proj_intro}</h3>

                        </div>
                        <div className="art-body">
                            <p>{props.prob_intro} </p>
                            {props.src.map(value => {return(
                                    <img src={value} alt="output"/>
                                    )}
                                    )
                            }
                        </div>
                    </div>
                    <hr/>
                        <div className="article">
                            <div className="art-head">
                                <h3>Technologies</h3>
                                <ul>
                                    {props.li.map((value,index) => {
                                        return <li key={index}>{value}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <hr />
                            <div className="article">
                                <div className="art-head">
                                    <h3 style={{color:"#"}}># Link to the project</h3>

                                </div>
                                <div className="art-body">
                                    {props.icons_link.map((value,index) => {
                                        return (
                                            <a href={value} target="_blank" key={index} >
                                                {props.icons[index]}
                                            </a>
                                        )
                                    })}
                                </div>

                            </div>
            </div>

            </>

    )

}
export default ML_Projects
