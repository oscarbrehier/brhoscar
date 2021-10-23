import React from "react";
import {links} from "../../data/user-data";
import './style.css';
import './phone-view.css'

export default function Footer() {

    return (
        <div className='absolute w-100 h-auto'>
            <div className='fContainer__wrapper flex justify-between w700'>
                <div className='fContainer__wrapper--left'>
                    @ 2021 -
                    <br/>
                    Under <a href={links.thisRepoLicense} target='blank'>MIT License</a>
                </div>
                <div className='fContainer__wrapper--right textAlign-right'>
                    <p>
                        <a href={links.instagram} target='blank'>Instagram</a>    <a href={links.github} target='blank'>GitHub</a>
                        <br/>
                        <a href={links.thisRepo} target='blank'>Source Code</a>
                    </p>
                </div>
            </div>
        </div>
    )

}