import React from 'react';
import './Cards.css'
import {FaGithubSquare} from "react-icons/fa";

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link'>
                    <figure className='cards__item__pic-wrap'>
                        <a href={props.path} target="__blank" rel="noopener noreferrer" >
                        <img className='cards__item__img' alt="amazon-clone" src={props.src}/></a>
                    </figure>
                    <div className='cards__item__info'>
                        <h3>{props.title}</h3>
                        <p className='cards__item__text'>{props.text}</p>
                        <div className="cards__footer">
                        <span>
                             <a href={props.path} target="__blank" rel="noopener noreferrer"><FaGithubSquare className="cards__footer__size" /> </a>

                        </span>
                            { props.weblink ?<a href={props.weblink} target="__blank" rel="noopener noreferrer">WEBSITE LINK</a>:""}

                        </div>
                    </div>

                </div>
            </li>
        </>
    );
}

export default CardItem;
