import './style.css';
import './phone-view.css';
import React from "react";

export default function Landing(msg) {

    return (

        <div>
            <div className='h-100 w-100 container relative flex align-center justify-center'>
                <div className="wrapper h-100 w-inherit homepage__wrapper">
                    <div className='homepage__description w400'>
                        {msg}
                    </div>
                </div>
            </div>
        </div>

    )

}