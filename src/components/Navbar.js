import React, {useState} from "react";
import {FaTypo3 , FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-router-dom";
import './Navbar.css'

function Navbar() {
    const [click,setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    RIYA SHAH <FaTypo3 />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className='fa-bars' /> : <FaBars className='fa-bars' />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className ='nav-links' onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/projects' className ='nav-links' onClick={closeMobileMenu}>PROJECTS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className ='nav-links' onClick={closeMobileMenu}>ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blog' className ='nav-links' onClick={closeMobileMenu}>BLOG</Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    )

}
export default Navbar;
