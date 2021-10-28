import './style.css';
import './phone-view.css';

export default function Project(title, description, languages, url) {

    return (

        <div className='wpContainer flex'>
            <div className='wpContainer--number flex align-center justify-center w700'>
                001
            </div>
            <div className='wpContainer__info flex column justify-center '>
                <div className='wpContainer__info--title w700 capitalize'>
                    { title }
                </div>
                <div className='wpContainer__info--description'>
                    { description }
                </div>
            </div>
            <div className='wpContainer__github flex align-center justify-center'>
                <a href={url} target='blank'>
                    <div className='wpContainer__github--button w-auto flex align-center justify-center w700 uppercase'>
                        source code
                    </div>
                </a>
            </div>
        </div>

    )

};