import React from "react"
import './Blog.css'
import BlogItem from "./BlogItem";
import {Project_Data,ML_Data} from "./Features_projects_list";



const Blog = () => {
    return (
        <>
        <div id='#projects'>

            <div className="section" style={{backgroundColor:'#f7f4f3'}}>
                    <div className="section-title">
                        <h2>Featured Projects</h2>
                        <div className="underline"></div>
                    </div>
                <div className="section-center projects-page-center">
                    {Project_Data.map(item =>{
                        return( <BlogItem  {...item}
                        />)
                    })}


                </div>
            </div>
        </div>
        <div id='#ml_projects' style={{backgroundColor:"#044E53"}} >
            <div className='section' >
                <div className="section-title">
                    <h2 style={{color:"white"}} >Machine Learning Projects</h2>
                    <div className="underline"></div>
                </div>
                <div className="section-center projects-page-center">
                    {ML_Data.map(item =>{
                        return( <BlogItem {...item}
                        />)
                    })}


                </div>
            </div>
        </div>
            </>


    )
}
export default Blog;
