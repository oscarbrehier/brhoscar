import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Turn as Hamburger } from 'hamburger-react'
import './style.css';
import './phone-view.css';

export default function Navigation() {

    let history = useHistory();
    const [isOpen, setOpen] = useState(false);

    const handleClick = (e) => {

        e.preventDefault();
        setOpen(false);

    }

    const handleHome = () => {

        setOpen(false);
        history.push('/');

    }

    const handleAbout = () => {

        setOpen(false);
        history.push('/about');

    }

    const handleWork = () => {

        setOpen(false);
        history.push('/work');

    }

    return (

        <div className='absolute w-100 h-100'>
            <div className='navigation w-100 align-center'>
                <div className='navigation--wrapper w-100 flex align-center justify-between h-inherit'>
                    <div className='navigation--left capitalize'>
                        <Link to='/'>oscar bréhier.</Link>
                    </div>
                    <div className='navigation--right capitalize'>
                        <div className='navigation--hamburger flex align-center justify-center none'>
                            <Hamburger toggled={isOpen} toggle={setOpen} size={20} rounded/>
                        </div>
                        <div className='navigation--links flex'>
                            <div>
                                <Link to='about'>about</Link>
                            </div>
                            <div>
                                <Link to='/work'>work</Link>
                            </div>
                            {/*<div>*/}
                            {/*    <Link to='contact'>contact</Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <div className={ !isOpen ? "none" : null } style={{height: '92vh', width: '100%'}}>
                    <div className='navigation--phone fixed h-inherit w-inherit bRed capitalize flex column justify-center align-center'>
                        <div className='navigation--phone--links h-auto w-auto'>
                            <div className="w-inherit flex justify-center">
                                <Link to='/' onClick={handleHome}>Home</Link>
                            </div>
                            <div className="w-inherit flex justify-center">
                                <Link to='/about' onClick={handleAbout}>about</Link>
                            </div>
                            <div className="w-inherit flex justify-center">
                                <Link to='/work' onClick={handleWork}>work</Link>
                            </div>
                            {/*<div className="w-inherit flex justify-center">*/}
                            {/*    <Link to='contact' onClick={handleClick}>contact</Link>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}