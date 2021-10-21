import React, {useEffect, useState} from "react";
import Project from "../../components/Project/Project";
import './style.css';
import './prone-view.css';
import {getPosts} from "../../api/brhoscar";

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

    return (

        <div className='pContainer w-100 absolute flex align-center'>
            <div className='pContainer__wrapper'>
                <div className='pContainer__wrapper__pageTitle'>Projects</div>
                <div className='pContainer__wrapper__projects h-auto flex align-center justify-center column'>
                    <RenderResult/>
                </div>
            </div>
        </div>

    )

};