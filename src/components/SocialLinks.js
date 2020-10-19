import React from "react"
import {
    FaFacebookSquare,
    FaLinkedin,
    FaGithubSquare,
} from "react-icons/fa"

const data = [
    {
        id: 1,
        icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
        url: "https://www.facebook.com/riya.shah.357284/",
    },
    {
        id: 2,
        icon: <FaLinkedin className="social-icon"></FaLinkedin>,
        url: "https://www.linkedin.com/in/riyarahulshah/",
    },
    {
        id: 3,
        icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
        url: "https://github.com/shahriya1995",
    },

]
const links = data.map(link => {
    return (
        <li key={link.id}>
            <a href={link.url} className="social-link" target="__blank">
                {link.icon}
            </a>
        </li>
    )
})

export default ({ styleClass }) => {
    return (
        <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
    )
}
