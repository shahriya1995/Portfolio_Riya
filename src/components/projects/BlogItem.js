import React from "react";
import './Blog.css'
import {FaExternalLinkAlt} from "react-icons/fa/index";
import {Link} from "react-router-dom";
function BlogItem(props) {
    return(

        <article className="single-project">
            <div className="project-container">
                <img src={props.src} alt="single project"/>
                {console.log(props.id)}

                <Link to={`/project_pages/${props.cat}/${props.id}`} className="project-icon">
                        <FaExternalLinkAlt />
                </Link>
            </div>
            <div className="project-details">
                <h4> {props.text}</h4>
                <p>
                    {props.subtitle}
                </p>
                <div className="project-footer">
              {/*<span>*/}
              {/*      <FaGithubSquare />*/}
              {/*</span>*/}
              {/*      <a href="/project_pages">READ MORE</a>*/}
                </div>
            </div>
        </article>
    )

}

export default BlogItem
