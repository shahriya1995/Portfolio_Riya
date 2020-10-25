import React from "react"
import BlogItem from "./BlogItem"
import {Project_Data,ML_Data} from "./Features_projects_list";
import CardItem from "./CardItem";



const Blog = () => {
    return (
        <>
            <div className='cards' id="#reactjs">
                <h2>React JS projects</h2>
                <div className="underline"></div>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>

                            <CardItem
                                title="Amazon Clone"
                                src='images/dashboard1.png'
                                text='Full-stack amazon clone using reactjs integrated with firebase'
                                path='https://github.com/shahriya1995/amazon_clone_reactjs'
                            />


                        </ul>

                    </div>
                </div>
            </div>



        <div id='#projects'>

            <div className="section" style={{backgroundColor:'#f7f4f3'}}>
                    <div className="section-title">
                        <h2>Featured Projects</h2>
                        <div className="underline"></div>
                    </div>
                <div className="section-center projects-page-center">
                    {Project_Data.map((item,value) =>{
                        return( <BlogItem  {...item} key={value}
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
                    {ML_Data.map((item,value) =>{
                        return( <BlogItem {...item} key={value}
                        />)
                    })}


                </div>
            </div>
        </div>
            </>


    )
}
export default Blog;
