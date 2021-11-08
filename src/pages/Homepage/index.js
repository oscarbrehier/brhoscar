import React from "react";

import Landing from "../../components/Landing";
import Email from "../../components/email";

import './style.css';
import './phone-view.css';

export default function Homepage() {

    function Main() {

        let message = Landing('Full Stack Developer and Designer');
        return message;

    }

    return (

       <div>
           <Main/>
           <div className='w-100 h-auto container relative'>
                <div className="wrapper h-inherit w-inherit flex align-center">
                    <div className='homepage__about--text'>
                        I am a young 16 year-old student by the name of Oscar Bréhier. Currently living is Athens, Greece, but I work with people coming from all around the world.
                    </div>
                </div>
           </div>
           <div className='w-100 h-auto container relative'>
               <div className='wrapper h-inherit w-inherit flex justify-between homepage__question01--wrapper'>
                    <div className='homepage--question01'>
                        What in the world is a full stack developer?
                    </div>
                   <div className='homepage--response01'>
                       A full stack developer is an engineer who can handle both back-end and front-end.
                       Meaning someone who works with server side of the application as well as the client side.
                       Front-end deals with interface, developer the navigation and visuals and thus focus on user experience.
                       On the otherside back-end deals with the server and database of the application in order to allow the front end development to exist.
                   </div>
               </div>
           </div>
           <Email className='homepage__email'/>
           {/*<div className='separator'></div>*/}
       </div>

    )

};
