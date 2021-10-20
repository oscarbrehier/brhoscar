import './style.css';

export default function Project(props) {

    return (
        <div className='wpContainer flex align-center h-auto'>
            <div className="wpContainer__wrapper- flex justify-center column">
                <div className='wpContainer--title'>Project Name</div>
                <div className='wpContainer--description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque varius risus vel varius. Cras nec tempus magna.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean pellentesque varius risus vel varius. Cras nec tempus magna.
                </div>
                <div className='wpContainer--languages'>Javascript - NodeJS - HTML - CSS</div>
                <div className='wpContainer--github'>VIEW ON GITHUB</div>
            </div>
        </div>
    )

};