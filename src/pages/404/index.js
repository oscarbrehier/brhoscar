import styled from 'styled-components';
import './style.css';

export default function Error() {

    const Text = styled.text`
        font-size: 25px;
    `

    return (

        <div className='container h-100 w-100'>
            <div className="wrapper h-inherit w-inherit flex align-center justify-center">
                <Text>
                    404
                    <br/>
                    PAGE NOT FOUND
                </Text>
            </div>
        </div>

    )

}