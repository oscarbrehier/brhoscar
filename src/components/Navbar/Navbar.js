import React from "react";
import { Link } from 'react-router-dom';
import { data } from '../../data/user-data';
import './style.css';

export default function Navbar() {

    return (

        <div className='container flex justify-between relative'>
            <div className='navLeft absolute left bottom w-auto h-auto'>
                <a href="/">
                    { data.name }.
                </a>
            </div>
            <div className='navRight absolute right bottom w-auto h-auto'>
                <Link to="/work">Work</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>

    )

};