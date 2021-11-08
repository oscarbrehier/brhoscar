import { Link } from 'react-router-dom';
import Email from '../../components/email';
import './style.css';
import './phone-view.css';

export default function Contact() {

    return (

        <div className='container w-100 h-100'>
            <div className='wrapper w-100 h-100 flex align-center justify-center'>
                <Email/>
            </div>
        </div>

    )

}