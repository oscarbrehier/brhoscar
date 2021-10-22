import './style.css';
import './phone-view.css';

export default function Project(title, description, languages, url) {

    return (

        <div className='wpContainer'>
            <div className='flex'>
                <p>
                    <a href={url} target='blank'><span className='wpContainer--title capitalize underline'>{title}</span></a>
                    <span className='wpContainer--description lowercase'>{description}</span>
                </p>
            </div>
        </div>

    )

};