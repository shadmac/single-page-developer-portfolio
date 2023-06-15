import React from 'react'
import { useDeveloperContext } from '../../Context'

import './DeveloperInfo.css'

const DeveloperInfo = () => {

    const { developersData } = useDeveloperContext()

    return (
        <>
            {
                developersData.map((developer, index) => (
                    <div className='developerContainer' key={developer.id} >
                        <div className='devGreeting' > {`${developer.greeting}`} </div>
                        <div className='devNameContainer' >
                            <p>I'm</p>
                            <div className='devName' > {`${developer.firstName} ${developer.lastName}. `} </div>
                        </div>
                        <div className='devRectangle' ></div>
                        <div className='devIntro'> {`${developer.intro}`} </div>
                    </div>
                ))
            }

        </>
    )
}

export default DeveloperInfo