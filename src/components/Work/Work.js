import './style.css';
import './phone-view.css';

export default function Work(title, description, languages, url, count) {

    return (

        <div className='container work__container w-100 flex'>
            <div className="work--type">
                Website
            </div>
            <div className='work__info flex column'>
                <div className="work__info--title w500 lowercase">
                    {title}
                </div>
                <div className="work__info__description">
                    {description}
                </div>
            </div>
        </div>

    )

};