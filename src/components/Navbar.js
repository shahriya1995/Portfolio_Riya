import React, {useState} from "react";
import {FaTypo3 , FaBars, FaTimes, FaAngleDoubleDown} from "react-icons/fa";
import {Link} from "react-router-dom";
import {animateScroll as scroll} from 'react-scroll';
import './Navbar.css'
import Dropdown from "./Dropdown";

function Navbar() {
    const toggleHome = () =>{ scroll.scrollToTop()};
    const [click,setClick] = useState(false)
    const [dropdown,setDropdown] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
        ;
    }

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
        ;
    }


    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={toggleHome}> RIYA SHAH <FaTypo3 />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    {click ? <FaTimes className='fa-bars' /> : <FaBars className='fa-bars' />}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to='/' className ='nav-links' onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                        <Link to='' className ='nav-links' onClick={closeMobileMenu}>PROJECTS&nbsp;<FaAngleDoubleDown /></Link>
                        {dropdown && <Dropdown/>}
                    </li>
                    <li className="nav-item">
                        <Link to='/about' className ='nav-links' onClick={closeMobileMenu}>ABOUT</Link>
                    </li>

                </ul>
            </div>
        </nav>
        </>
    )

}
export default Navbar;
