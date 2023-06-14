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
            "techstack": {
                "html": "4",
                "css": "4",
                "javascript": "4",
                "accessibility": "4",
                "react": "3",
                "sass": "3"
            },
            "contactMessage": "  I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.",
            "projectDetails": [
                {
                    "title": "Design portfolio",
                    "techs": {
                        "1": "html",
                        "2": "css"
                    },
                    "img": {
                        "large": "./assets/images/thumbnail-project-1-large.webp",
                        "small": "./assets/images/thumbnail-project-1-small.webp"
                    }
                },
                {
                    "title": "E-learning landing page",
                    "techs": {
                        "1": "html",
                        "2": "css"
                    },
                    "img": {
                        "large": "./assets/images/thumbnail-project-2-large.webp",
                        "small": "./assets/images/thumbnail-project-2-small.webp"
                    }
                },
                {
                    "title": "Todo web app",
                    "techs": {
                        "1": "html",
                        "2": "css",
                        "3": "javascript"
                    },
                    "img": {
                        "large": "./assets/images/thumbnail-project-3-large.webp",
                        "small": "./assets/images/thumbnail-project-3-small.webp"
                    }
                },
                {
                    "title": "Entertainment web app",
                    "techs": {
                        "1": "html",
                        "2": "css",
                        "3": "javascript"
                    },
                    "img": {
                        "large": "./assets/images/thumbnail-project-4-large.webp",
                        "small": "./assets/images/thumbnail-project-4-small.webp"
                    }
                },
                {
                    "title": "Memory Game",
                    "techs": {
                        "1": "html",
                        "2": "css",
                        "3": "javascript"
                    },
                    "img": {
                        "large": "./assets/images/thumbnail-project-5-large.webp",
                        "small": "./assets/images/thumbnail-project-5-small.webp"
                    }
                },
                {
                    "title": "Art gallery showcase",
                    "techs": {
                        "1": "html",
                        "2": "css",
                        "3": "javascript"
                    },
                    "img": {
                        "large": "./assets/images/thumbnail-project-6-large.webp",
                        "small": "./assets/images/thumbnail-project-6-small.webp"
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