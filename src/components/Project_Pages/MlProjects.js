import React from "react";
import './ML_Projects.css'
// import {FaExternalLinkAlt , FaGithubSquare,FaNewspaper  } from "react-icons/fa";
// import {GrHeroku} from "react-icons/gr"
// import {Project_Data} from "../projects/Features_projects_list";
// import BlogItem from "../projects/BlogItem";

function MlProjects(props) {
    return (
        <>
        <header className="mlprojects">
            <div className="mlprojects__section">
                <h1>{props.title}</h1>
                <h3>{props.subtitle}</h3>

                <div className="mlprojects__underline"></div>
                <div className="mlcontainer__body" align='center'>
                    {props.icons_link.map((value,index) => {
                        return (
                            <a href={value} target="_blank" key={index} rel="noopener noreferrer">
                                {props.icons[index]}
                            </a>
                        )
                    })}
                </div>
            </div>
        </header>
            <div className="mlcontainer">
                <div className="article">
                    <div className="mlcontainer__head">
                        <h3>{props.proj_title}</h3>
                        {/*<h2>article #1</h2>*/}
                    </div>
                    <br/>
                    <div className="mlcontainer__body">
                        <p className="mlcontainer__quote">{props.quote}</p>
                        <p>{props.p1}</p>

                         </div>

                </div>
                <hr/>
                    <div className="article">
                        <div className="mlcontainer__head">
                            <h3>{props.proj_intro}</h3>

                        </div>
                        <div className="mlcontainer__body">
                            <p>{props.prob_intro} </p>
                            {props.src.map((value,index) => {return(
                                    <img src={value} alt="output" key={index} />
                                    )}
                                    )
                            }
                        </div>
                    </div>
                    <hr/>
                        <div className="article">
                            <div className="mlcontainer__head">
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
                                <div className="mlcontainer__head">
                                    <h3 style={{color:"#"}}># Link to the project</h3>

                                </div>
                                <div className="mlcontainer__body">
                                    {props.icons_link.map((value,index) => {
                                        return (
                                            <a href={value} target="_blank" key={index} rel="noopener noreferrer" >
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
export default MlProjects
