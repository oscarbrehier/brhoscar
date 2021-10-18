import React, { useState, useEffect } from "react";
import FileBase from 'react-file-base64';
import './style.css';

import { login } from "../../api";

export default function Admin() {

    const [ data, setData ] = useState({ username: '', password: '' });

    const handleSubmit = async (e) => {

        e.preventDefault();
        await login(data);

    }

    return (

        <div className='aContainer w-100 flex justify-center align-center'>

            <div className="aContainer__wrapper green">

                <form autoComplete='off' noValidate onSubmit={handleSubmit}>
                    <input name="username" value={data.username} onChange={(e) => setData({ ...data, username: e.target.value })}/>
                    <input name="password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })}/>
                    <button type='submit'>Submit</button>
                </form>

            </div>

        </div>

    );

};