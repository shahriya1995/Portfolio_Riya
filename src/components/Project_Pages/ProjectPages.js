import React from 'react';
import './Project_pages.css';



function ProjectPages(props) {
    return(
        <>
                    <section className="blog-template" >
                        <section className="section-center" >

                            <h2 style={{textAlign:"center"}}>{props.text}</h2>
                            <h3 style={{textAlign:"center"}}>{props.subtitle}</h3><br />

                            <p>{props.p1}</p>

                            <p>{props.p2}</p>
                            <h3>Technology Stack Used</h3>

                                <ul >
                                    {props.li.map((value,index) => {
                                        return <li key={index}>{value}</li>
                                    })}
                                </ul>
                            <br />

                            <h3>Arcitecture Overview</h3>
                            <p><b>{props.o1}</b>{props.o1_data} </p>
                                <ul>
                                <li> <b>{props.f1} </b> {props.f1_data}</li>
                                    <li> <b>{props.f2} </b> {props.f2_data}</li>
                                    </ul>

                            <center>
                            <img src={props.src} alt="architecture diagram"/><br />

                            </center>
                            <p><b>{props.sm}  </b>{props.sm_data}</p>
                                <ul>
                                    {props.sm1.map((value,index) => {
                                        return <li key={index}>{value}</li>
                                    })}
                                </ul>




                        </section>
                        <a className="btn center-btn" href="/about">More Project Details</a>
                    </section>


            <br />


</>



    )

}

export default ProjectPages;
