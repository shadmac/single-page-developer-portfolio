import React from 'react'

const ContactMeButton = () => {
    return (
        <div style={btnContainerStyle} >
            <button style={contactMeBtnStyle} >Contact me</button>
            <div style={btnRectangleStyle} ></div>
        </div>
    )
}

export default ContactMeButton

const btnContainerStyle = {
    width: "7.5rem",
    height: '2.375rem',
    position: "absolute",
    top: "35.4375rem",
    left: "10.3125rem",
    display: "flex",
    justifyContent: "center",
}

const contactMeBtnStyle = {
    border: "none",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 700,
    fontSize: "1rem",
    padding: "0rem",

}

const btnRectangleStyle = {
    width: "7.5rem",
    height: ".125rem",
    backgroundColor: "rgba(78, 225, 160, 1)",
    position: "absolute",
    top: "2.25rem",
}