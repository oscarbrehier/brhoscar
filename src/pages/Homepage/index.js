import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import './style.css';
import './about.css';
import './phone-view.css';

export default function Homepage() {

    return (

        <div>

            <Navbar mode={'dark'}/>

            <div className='hContainer relative flex align-center'>
                <div className='hContainer__wrapper h-auto w-auto column'>
                    <div className='hContainer__wrapper--h1'>
                        <h1>Oscar</h1>
                        <h1>Bréhier</h1>
                    </div>
                    <div className='hContainer__wrapper--p'>
                        <p className='tBlack'>
                            I'm a self taught front-end developer
                            <br/>
                            and designer
                        </p>
                    </div>
                </div>
            </div>
            <div className='hAbout h-auto'>
                <div className='hAbout__wrapper h-inherit'>
                    <div>
                        <p className='hAbout--title w700'>hey.</p>
                        <p className='hAbout--subtitle'>Hello, I am Oscar, a young 16 year-old front-end developer and designer .</p>
                        <p className='hAbout--paragraph'>
                            I have 3+ years of experience working on various projects and still looking forward to learning more.
                            I spend most of my time coding scripts and building websites.
                            Through this, I have learned self-taught web development, graphic design and some video editing.
                            Current coding languages I know and use are JavaScript, HTML, CSS and Python.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )

};