import React, {useEffect, useState} from "react";

import Landing from "../../components/Landing";
import Work from "../../components/Work/Work";
import {getPosts} from "../../api/brhoscar";

import './style.css';
import './phone-view.css';

export default function Projects() {

    function RenderResult() {

        const [res, setRes] = useState('Loading');

        useEffect(() => {

            getPosts().then(result => {
                setRes(result);
            });

        }, []);

        let elements = [];
        for (let i = 0; i < res.length; i++) {

            let title = res[i].name;
            let description = res[i].description;
            let languages = res[i].languages;
            let url = res[i].githubURL;
            let count = i + 1;

            if(count < 10) count = `00${count}`;

            elements.push(Work(title, description, languages, url, count));
        }

        return (
            elements
        )

    }

    function Main() {

        let message = Landing('Selected Work');
        return message;

    }

    return (

        <div>
            <Main/>
            <div className='container h-auto w-100 projects__container'>
                <div className='wrapper h-inherit w-inherit'>
                    <RenderResult/>
                </div>
            </div>
        </div>

    )

};