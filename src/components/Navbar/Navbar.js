import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import './phone-view.css';

export default function Navbar({mode}) {

    // color <light|gray|dark>

    let color = 'black';

    // if(mode === 'gray' || !mode) {
    //     color = '#797f85';
    // } else if(mode === 'dark') {
    //     color = 'black';
    // } else if(mode === 'white') {
    //     color = 'white';
    // }

    return (

        <div className='container absolute'>
            <div className='nav__wrapper h-auto'>
                <div className='navLeft absolute left w-auto h-auto'>
                    <a href="/">
                        Oscar Bréhier.
                    </a>
                </div>
                <div className='navRight absolute right w-auto h-auto'>
                    <Link style={{color: color}} to="/projects">Projects</Link>
                    <Link style={{color: color}} to="/about">About</Link>
                    <Link style={{color: color}} to="/contact">Contact</Link>
                </div>
            </div>
        </div>

    )

};