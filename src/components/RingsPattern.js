import React from 'react'
import patternRings from '../assets/images/pattern-rings.svg'

const ringsPatternStyle = {
    height: '8.0625rem',
    width: '33.125rem',
    left: '-6.25rem',
    top: '8.3125rem',
    mixBlendMode: 'normal',
    opacity: 0.25,
    position: 'absolute'
}

const RingsPattern = () => {
    return (
        <img src={patternRings} alt='rings of circles' style={ringsPatternStyle} />
    )
}

export default RingsPattern