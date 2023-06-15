import React from 'react';
import { useDeveloperContext } from '../../../Context';

import './TechStackExperience.css';

const TechStackExperience = () => {
    const { developersData } = useDeveloperContext();

    return (
        <div className="techStackContainer">
            <section className="tStackRectangle"></section>
            <>
                {developersData.map((developer, index) => (
                    <section
                        className="allTechStacks"
                        key={developer.id}
                    >
                        <article className="htmlContainer">
                            <div className='techTitles html'>HTML</div>
                            <div className='techExp '>{developer.techstack.html}</div>
                        </article>
                        <article className="cssContainer">
                            <div className='techTitles css'>CSS</div>
                            <div className='techExp'>{developer.techstack.css}</div>
                        </article>
                        <article className="jsContainer">
                            <div className='techTitles javaspt'>Javascript</div>
                            <div className='techExp '>{developer.techstack.javascript}</div>
                        </article>
                        <article className="accessContainer">
                            <div className='techTitles access'>Accessibility</div>
                            <div className='techExp'>{developer.techstack.access}</div>
                        </article>
                        <article className="reactContainer">
                            <div className='techTitles react'>React</div>
                            <div className='techExp'>{developer.techstack.react}</div>
                        </article>
                        <article className="sassContainer">
                            <div className='techTitles sass'>Sass</div>
                            <div className='techExp'>{developer.techstack.sass}</div>
                        </article>
                    </section>
                ))}
            </>
        </div>
    );
};

export default TechStackExperience;
