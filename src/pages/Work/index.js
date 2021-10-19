import './style.css';
import WorkPost from "../../components/Work/Work";

export default function Work() {

    return (

        <div className='w-100'>
            <div className='title flex align-center justify-center'>Work</div>
            <div className='wContainer__wrapper w-100 h-auto flex align-center justify-center'>
                <div className='wContainer__wrapper__works h-auto w-auto'>
                    <WorkPost/>
                    <WorkPost/>
                    <WorkPost/>
                    <WorkPost/>
                </div>
            </div>
        </div>

    )

};