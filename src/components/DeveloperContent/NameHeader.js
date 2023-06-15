import React from 'react';
import { useDeveloperContext } from '../../Context';

const nameHeaderStyle = {
    width: '10.75rem',
    height: "2rem",
    textTransform: 'lowercase',
    fontWeight: '700',
    fontSize: '2rem',
    color: 'rgba(255, 255, 255, 1)',
    marginTop: '2.4375rem',
    marginLeft: '10.3125rem',
};

const NameHeader = () => {
    const { developersData } = useDeveloperContext();

    return (
        <>
            {developersData.map((developer, index) => (
                <div
                    key={developer.id}
                    style={nameHeaderStyle}
                >
                    {`${developer.firstName}${developer.lastName} `}
                </div>
            ))}
        </>
    );
};

export default NameHeader;

