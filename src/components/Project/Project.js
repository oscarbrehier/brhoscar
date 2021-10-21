import './style.css';
import './phone-view.css';

export default function Project(title, description, languages, url) {

    return (

        <div className='wpContainer flex'>
            {/*<div className='wpContainer--title capitalize '>{ title }</div>*/}
            {/*<div className='wpContainer--description lowercase'>{ description }</div>*/}
            <p>
                <a href={url} target='blank' className='wpContainer--title capitalize'>{title}</a>
                <span className='wpContainer--description lowercase'>{description}</span>
            </p>
        </div>

    )

};