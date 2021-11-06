import Landing from "../../components/Landing";
import './style.css';
import './phone-view.css';

export default function About() {

    function Main() {

        let message = Landing('Full Stack Developer and Designer');
        return message;

    }

    return (

        // <div className='container w-100 h-auto relative'>
        //     <div className='wrapper h-inherit flex align-center justify-between'>
        //
        //     </div>
        // </div>
        <div>
            <Main/>
        </div>

    )

}