import React from "react";
import './style.css';
import './phone-view.css';

export default function Homepage() {

    return (

        <div className='hContainer relative flex align-center'>
            <div className='hContainer__wrapper h-auto w-auto column'>
                <div className='hContainer__wrapper--h1'>
                    <h1>Oscar</h1>
                    <h1>Bréhier</h1>
                </div>
                <div className='hContainer__wrapper--p'>
                    <p>
                        I'm a self taught front-end web developer
                        <br/>
                        and designer
                    </p>
                </div>
            </div>
        </div>

    )

};