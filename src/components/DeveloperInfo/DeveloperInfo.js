import React from 'react'
import { useDeveloperContext } from '../../Context'

import './DeveloperInfo.css'

const DeveloperInfo = () => {

    const { developersData } = useDeveloperContext()

    return (
        <div className='developerContainer'>
            {
                developersData.map((developer, index) => (
                    <>
                        <div className='devGreeting' > {`${developer.greeting}`} </div>
                        <div className='devNameContainer' >
                            <p>I'm</p>
                            <div className='devName' > {`${developer.firstName} ${developer.lastName}. `} </div>
                        </div>
                        <div className='devRectangle' ></div>
                        <div className='devIntro'> {`${developer.intro}`} </div>
                    </>
                ))
            }

        </div>
    )
}

export default DeveloperInfo