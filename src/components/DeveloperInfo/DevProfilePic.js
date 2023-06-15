import React from 'react'
import { useDeveloperContext } from '../../Context'
import DevContactLinks from '../Contact/DevContactLinks'

const DevProfilePic = () => {

    const { developersData } = useDeveloperContext()

    return (
        <>
            {developersData.map((developer, index) => (
                <div style={devPicContainerStyle} key={developer.id} >
                    <div style={contactLinksStyle} >
                        <DevContactLinks />
                    </div>
                    <img src={`${developer.profilePic.desktop}`} alt='profile of developer' style={devProfilePicStyle} />
                </div>
            )

            )}
        </>
    )
}

export default DevProfilePic

const devPicContainerStyle = {
    width: "27.8125rem",
    height: "45rem",
    left: "51.875rem",
    top: "0rem",
    position: "absolute",
    background: "rgba(36, 36, 36, 1)",
}

const devProfilePicStyle = {
    width: "27.8125rem",
    height: "38.625rem",
    position: "absolute",
    bottom: "0rem",
}

const contactLinksStyle = {
    zIndex: 1,
    width: "12.0625rem",
    height: "1.5625rem",
    position: "absolute",
    top: "2.6875rem",
    left: "13.9375rem",
}