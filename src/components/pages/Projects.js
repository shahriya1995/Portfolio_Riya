import React from "react";
import '../../App.css'
import ProjectPages from "../Project_Pages/ProjectPages";
import Featured_projects_data from "../Project_Pages/Featured_projects_data";
import MlProjects from "../Project_Pages/MlProjects";
import ML_Projects_Data from "../Project_Pages/ML_Projects_Data";


function Projects({match}) {
    const id = match.params.id
    const name = match.params.name
    if (name === 'FP') {
        return (

            Featured_projects_data.filter(item => item.id === parseInt(id)).map(item => {
                return (
                    <ProjectPages {...item} key={id} />

                )
            })

        )
    }

    else
    {

        return (
            ML_Projects_Data.filter(item1 => item1.id === parseInt(id)).map(item1 => {
                return (
                    <MlProjects {...item1} key={item1.id} />

                )
            })
        )

    }
}

export default Projects
