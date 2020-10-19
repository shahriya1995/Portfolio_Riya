import React from 'react';
// import './Project_pages.css';
import './ML_Projects.css'


function ProjectPages(props) {
    return(
        <>
            <header className="mlprojects">
                <div className="mlprojects__section">
                    <h2>{props.text}</h2>
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
                        <h3>{props.text}</h3>

                        {/*<h2>article #1</h2>*/}
                    </div>
                    <br/>
                    <div className="mlcontainer__body">
                        <p>{props.p1}</p>
                        <p className="mlcontainer__quote">{props.p2}</p>
                    </div>

                </div>
                <hr/>
                <div className="article">
                    <div className="mlcontainer__head">
                        <h3>Architecture Overview</h3>
                        {/*<h4>{props.o1}</h4>*/}
                        {/*        <p>{props.o1_data} </p>*/}
                        {/*            <ul>*/}
                        {/*            <li>{props.f1} :- {props.f1_data}</li>*/}
                        {/*                <li> {props.f2} :- {props.f2_data}</li>*/}
                        {/*            </ul>*/}

                    </div>
                    <div className="mlcontainer__body" >
                        <center>
                                <img src={props.src} alt="output"/></center>

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

export default ProjectPages;
