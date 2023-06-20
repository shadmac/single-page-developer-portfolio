import React, { createContext, useContext } from 'react'

const DeveloperContext = createContext()

export const Context = ({ children }) => {

    const developersData = [
        {
            "id": "adamK",
            "firstName": "Adam",
            "lastName": "Keyes",
            "greeting": "Nice to meet you!",
            "intro": "Based in the UK, I'm a front-end developer passionate about building accessible web apps that users love.",
            "profilePic": {
                "desktop": '/assets/images/image-profile-desktop.webp',
                "mobile": '/assets/images/image-profile-mobile.webp',
                "tablet": '/assets/images/image-profile-tablet.webp',
            },
            "techstack": {
                "html": '4 years experience',
                "css": "4 years experience",
                "javascript": "4 years experience",
                "access": "4 years experience",
                "react": "3 years experience",
                "sass": "3 years experience"
            },
            "contactMessage": "  I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.",
            "projectDetails": [
                {
                    "title": "Design portfolio",
                    "techs": {
                        "a": "html",
                        "b": "css"
                    },
                    "img": {
                        "large": "/assets/images/thumbnail-project-1-large.webp",
                        "small": "/assets/images/thumbnail-project-1-small.webp"
                    }
                },
                {
                    "title": "E-learning landing page",
                    "techs": {
                        "a": "html",
                        "b": "css"
                    },
                    "img": {
                        "large": "/assets/images/thumbnail-project-2-large.webp",
                        "small": "/assets/images/thumbnail-project-2-small.webp"
                    }
                },
                {
                    "title": "Todo web app",
                    "techs": {
                        "a": "html",
                        "b": "css",
                        "c": "javascript"
                    },
                    "img": {
                        "large": "/assets/images/thumbnail-project-3-large.webp",
                        "small": "/assets/images/thumbnail-project-3-small.webp"
                    }
                },
                {
                    "title": "Entertainment web app",
                    "techs": {
                        "a": "html",
                        "b": "css",
                        "c": "javascript"
                    },
                    "img": {
                        "large": "/assets/images/thumbnail-project-4-large.webp",
                        "small": "/assets/images/thumbnail-project-4-small.webp"
                    }
                },
                {
                    "title": "Memory Game",
                    "techs": {
                        "a": "html",
                        "b": "css",
                        "c": "javascript"
                    },
                    "img": {
                        "large": "/assets/images/thumbnail-project-5-large.webp",
                        "small": "/assets/images/thumbnail-project-5-small.webp"
                    }
                },
                {
                    "title": "Art gallery showcase",
                    "techs": {
                        "a": "html",
                        "b": "css",
                        "c": "javascript"
                    },
                    "img": {
                        "large": "/assets/images/thumbnail-project-6-large.webp",
                        "small": "/assets/images/thumbnail-project-6-small.webp"
                    }
                }
            ]
        },
    ]

    return (
        <DeveloperContext.Provider value={{ developersData }} >{children}</DeveloperContext.Provider>
    )
}

//custom hook to access the state
export const useDeveloperContext = () => useContext(DeveloperContext)