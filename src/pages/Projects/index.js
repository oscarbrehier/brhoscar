import './style.css';
import './prone-view.css';
import Project from "../../components/Project/Project";

export default function Projects() {

    return (

        <div className='pContainer w-100 absolute'>
            <div className='pContainer__wrapper'>
                <div className='pContainer__wrapper__pageTitle'>Projects</div>
                <div className='pContainer__wrapper__projects h-auto flex column'>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>
        </div>

    )

};