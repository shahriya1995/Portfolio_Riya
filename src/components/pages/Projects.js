import React from "react";
import '../../App.css'
import Project_pages from "../Project_Pages/Project_pages";
import Featured_projects_data from "../Project_Pages/Featured_projects_data";
import ML_Projects from "../Project_Pages/ML_Projects";
import ML_Projects_Data from "../Project_Pages/ML_Projects_Data";


function Projects({match}) {
    const id = match.params.id
    const name = match.params.name
    if (name === 'FP') {
        return (

            Featured_projects_data.filter(item => item.id === parseInt(id)).map(item => {
                return (
                    <Project_pages {...item} key={id} />

                )
            })

        )
    }

    else
    {

        return (
            ML_Projects_Data.filter(item1 => item1.id === parseInt(id)).map(item1 => {
                return (
                    <ML_Projects {...item1} key={item1.id} />

                )
            })
        )

    }
}

export default Projects
