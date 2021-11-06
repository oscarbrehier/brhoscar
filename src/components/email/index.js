import { Link } from "react-router-dom"
import './style.css';
import './phone-view.css';

export default function Email() {

    return (

        <div className='container email__container w-100'>
            <div className='wrapper email__wrapper h-inherit w-inherit flex column align-center justify-center'>
                Don't be shy
                <br/>
                <a href='mailto:brehieroscar@gmail.com'>brehieroscar@gmail.com</a>
            </div>
        </div>

    )

}