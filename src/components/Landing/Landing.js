import styled from "styled-components";
import './style.css';
import './phone-view.css';
import background02 from '../../images/background-02.jpg';
import background03 from '../../images/background-03.jpg';
import background04 from '../../images/background-04.jpg';
import background05 from '../../images/background-05.jpg';
import background06 from '../../images/background-06.jpg';

export default function Landing({ pageName, image }) {

    let bImage;
    if(image === 'background02') bImage = background02;
    if(image === 'background03') bImage = background03;
    if(image === 'background04') bImage = background04;
    if(image === 'background05') bImage = background05;
    if(image === 'background06') bImage = background06;

    const Background = styled.section`
        background-image: url(${bImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    `;

    return (
        <div>
            <Background className='w-100 h-100 relative'>
                <div className='lTitle flex align-center justify-center h-inherit w-inherit w700'>
                    {pageName}
                </div>
            </Background>
        </div>
    )

}