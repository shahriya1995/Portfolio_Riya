import React, {useState} from "react";
import {D_Menu_items} from './Dropdown_menu_items'
import './Dropdown.css';
import {Link as LinkS} from 'react-scroll'
function Dropdown() {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)


    return(

        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked':'dropdown-menu'}>

                {D_Menu_items.map((item,index) =>
                {
                    return(
                        <li key={index}>
                            <LinkS
                                className={item.cName}
                                to={item.path}
                                onClick={()=>setClick(false)}
                            >{item.title}
                            </LinkS>
                        </li>
                    )
                })}
            </ul>


        </>
    )

}
export default Dropdown;
