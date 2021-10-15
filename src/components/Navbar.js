import React from "react";
import { data } from '../data/user-data';
import '../styles/Navbar.css';

export default function Navbar() {

    return (

        <div className='container flex justify-between relative'>
            <div className='navLeft absolute left bottom w-auto h-auto'>
                <a href="/">
                    { data.name }.
                </a>
            </div>
            <div className='navRight absolute right bottom w-auto h-auto'>
                <a href="/">Work</a>
                <a href="/about">About</a>
                <a href="/">Contact</a>
            </div>
        </div>

    )

};