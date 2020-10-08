import React from "react";
import './Button.css';
import {Link} from 'react-router-dom';


const STYLES = ['btn-outline','btn--primary',];
const SIZES = ['btn--large','btn--medium'];



export const Button =({children,type,onClick,buttonStyle,buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = STYLES.includes(buttonSize) ? buttonSize : SIZES[0];

    return(
        <Link to='/Resume' className={'btn-mobile'}>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                {children}
            </button>
        </Link>
    )
}
