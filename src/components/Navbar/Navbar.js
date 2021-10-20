import React from "react";
import { Link } from 'react-router-dom';
import { data } from '../../data/user-data';
import './style.css';
import './phone-view.css';

export default function Navbar() {

    return (

        <div className='container absolute'>
            <div className='nav__wrapper h-auto'>
                <div className='navLeft absolute left w-auto h-auto'>
                    <a href="/">
                        { data.name }.
                    </a>
                </div>
                <div className='navRight absolute right w-auto h-auto'>
                    <Link to="/work">Work</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>

    )

};