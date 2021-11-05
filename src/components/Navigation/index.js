import { useState } from "react";
import { Link } from "react-router-dom";
import { Turn as Hamburger } from 'hamburger-react'
import './style.css';
import './phone-view.css';

export default function Navigation() {

    const [isOpen, setOpen] = useState(false);

    if(isOpen === false) {

    }

    if(isOpen === true) {

    }

    return (

        <div className='absolute w-100 h-100'>
            <div className='navigation w-100 align-center'>
                <div className='navigation--wrapper flex align-center justify-between h-inherit'>
                    <div className='navigation--left capitalize'>
                        <Link to='/'>oscar bréhier.</Link>
                    </div>
                    <div className='navigation--right capitalize'>
                        <div className='navigation--hamburger flex align-center justify-center none'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
                        </div>
                        <div className='navigation--links flex'>
                            <div>
                                <Link to='/work'>work</Link>
                            </div>
                            <div>
                                <Link to='about'>about</Link>
                            </div>
                            <div>
                                <Link to='contact'>contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={ !isOpen ? "none" : null } style={{height: '92vh', width: '100%'}}>
                    <div className='navigation--phone h-inherit w-inherit bRed capitalize flex column justify-center align-center'>
                        <div className='navigation--phone--links h-auto w-auto'>
                            <div className="w-inherit flex justify-center">
                                <Link to='/work'>work</Link>
                            </div>
                            <div className="w-inherit flex justify-center">
                                <Link to='about'>about</Link>
                            </div>
                            <div className="w-inherit flex justify-center">
                                <Link to='contact'>contact</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}