import Landing from "../../components/Landing";
import './style.css';
import './phone-view.css';

export default function About() {

    function Main() {

        let message = Landing('Want to \n know more?');
        return message;

    }

    return (

        <div>
            <Main/>
            <div className='container w-100 h-auto'>
                <div className='wrapper'>
                    <div className='about__about-me '>
                        <div>
                            My name is Oscar, a young 16 year-old front-end developer and designer.
                            <br/><br/>
                            I have 3+ years of experience working on various projects and still looking forward to learning more.
                            I spend most of my time coding scripts and building websites.
                            <br/><br/>
                            Through this, I have learned self-taught web development, graphic design and some video editing.
                            {/*Current coding languages I know and use are JavaScript, HTML, CSS and Python.*/}
                        </div>
                        <div className='about__small flex justify-between' style={{marginTop: '15vh'}}>
                            <div className='about__small--title uppercase'>
                                Programming languages & others
                            </div>
                            <div  className='about__small--elements'>
                                <div>HTML</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>NodeJS</div>
                                <div>ReactJS</div>
                                <div>Python</div>
                                <div>NPM</div>
                                <div>Heroku</div>
                                <div>MongoDB</div>
                                <div>Git</div>
                            </div>
                        </div>
                        <div className='about__small flex justify-between' style={{marginTop: '5vh'}}>
                            <div className='about__small--title uppercase'>
                                Tools
                            </div>
                            <div className='about__small--elements'>
                                <div>WebStorm</div>
                                <div>Photoshop</div>
                                <div>Illustrator</div>
                                <div>Premiere Pro</div>
                                <div>VS Code</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}