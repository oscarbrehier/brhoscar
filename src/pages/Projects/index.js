import React, {useEffect, useState} from "react";


import Landing from "../../components/Landing/Landing";
import Project from "../../components/Project/Project";
import {getPosts} from "../../api/brhoscar";

import './style.css';
import './phone-view.css';

export default function Projects() {

    function RenderResult() {

        const [res, setRes] = useState('Loading');

        useEffect(() => {

            getPosts().then(result => {
                console.log(result)
                setRes(result)
            });

        }, []);

        let elements = [];
        for (let i = 0; i < res.length; i++) {

            let title = res[i].name;
            let description = res[i].description;
            let languages = res[i].languages;
            console.log(languages);
            let url = res[i].githubURL;

            elements.push(Project(title, description, languages, url));
        }

        return (
            elements
        )

    }

    // <RenderResult/>

    return (

        <div>
            <Landing pageName='Projects' image='background02'/>
            <div className='pContainer__wrapper__projects'>
                <RenderResult/>
            </div>
        </div>

    )

};