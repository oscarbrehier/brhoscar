import Landing from "../../components/Landing/Landing";
import './style.css';
import './phone-view.css';
import React from "react";

export default function About() {

    return (

        <div>
            <Landing pageName='About' image='background02'/>
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

}