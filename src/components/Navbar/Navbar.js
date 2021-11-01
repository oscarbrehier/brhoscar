import React from "react";
import { Link } from 'react-router-dom';
import './style.css';
import './phone-view.css';

export default function Navbar() {

    return (

        <div className='container absolute'>
            <div className='nav__wrapper h-auto'>
                <div className='navLeft absolute left w-auto h-auto w700'>
                    <a href="/">
                        Oscar Bréhier.
                    </a>
                </div>
                <div className='navRight absolute right w-auto h-auto w700'>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>

    )

};