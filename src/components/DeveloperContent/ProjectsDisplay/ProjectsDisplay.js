import React from 'react'

import './ProjectsDisplay.css'
import ContactMeButton from '../../Contact/ContactMeButton'
import { useDeveloperContext } from '../../../Context'

const projectContactBtnStyle = {
    position: "absolute",
    top: "1.5625rem",
    left: "61.875rem",

}


const ProjectsDisplay = () => {

    const { developersData } = useDeveloperContext()

    return (
        <div className='projectDispContainer'>
            <div className='titleContainer'>Projects</div>
            <div style={projectContactBtnStyle}><ContactMeButton /></div>
            <div >
                {
                    developersData.map((developer, index) => (
                        <div className='projectsContainer'
                            key={`${developer.id}`}>
                            {developer.projectDetails.map((projectDetail, ind) => (
                                <div key={ind} className='project'>
                                    <img src={`${projectDetail.img.small}`} alt={`${projectDetail.title}`} className='projectImg' />
                                    <div className='projectDesc'>
                                        <div className='projectTitle'> {`${projectDetail.title}`} </div>
                                        <div className='projectTechs'>
                                            <div className='tech'>  {(projectDetail.techs.a == null || undefined) ? null : `${projectDetail.techs.a}`}  </div>
                                            <div className='tech'> {(projectDetail.techs.b == null || undefined) ? null : `${projectDetail.techs.b}`}  </div>
                                            <div className='tech'> {(projectDetail.techs.c == null || undefined) ? null : `${projectDetail.techs.c}`} </div>
                                        </div>
                                    </div>
                                </div>
                            )
                            )}
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default ProjectsDisplay