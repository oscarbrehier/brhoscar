import './style.css';
import './phone-view.css';

export default function Work(title, description, languages, url, count) {

    return (

        <div className='container work__container w-100 flex'>
            <div className='work--type'>
                Website
            </div>
            <div className='work__description flex column'>
                <div className='work__description--title lowercase'>{ title }</div>
                <div className='work__description--description'>
                    { description }
                </div>
            </div>
        </div>

    )

};