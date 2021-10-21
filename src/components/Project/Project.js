import { Link } from "react-router-dom";
import './style.css';

export default function Project(title, description, languages, url) {

    return (
        <div className='wpContainer flex align-center h-auto'>
            <div className="wpContainer__wrapper- flex justify-center column">
                <div className='wpContainer--title capitalize'>{ title }</div>
                <div className='wpContainer--description'>{ description }</div>
                <div className='wpContainer--languages'>{ languages }</div>
                <a href={url} target="blank" className='wpContainer--github uppercase'>View on Github</a>
            </div>
        </div>
    )

};