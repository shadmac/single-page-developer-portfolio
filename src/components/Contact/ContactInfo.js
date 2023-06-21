import React from 'react'
import { useDeveloperContext } from '../../Context'

import './ContactInfo.css'
import NameHeader from '../DeveloperContent/NameHeader'
import DevContactLinks from './DevContactLinks'

const inputStyle = {
    backgroundColor: "inherit",
    width: "25.0625rem",
    height: "1.625rem",
    borderStyle: "none",
    paddingLeft: ".3125rem",
}

const sendMsgBtnStyle = {
    border: "none",
    textTransform: "uppercase",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: 700,
    fontSize: "1rem",
    letterSpacing: ".1429rem",
    padding: "0rem",
    backgroundColor: "inherit",
}

const msgBtnRecStyle = {
    width: "9rem",
    height: ".125rem",
    backgroundColor: "rgba(78, 225, 160, 1)",
    top: "2.25rem",
}

const contactInfoDivider = {
    width: "69.375rem",
    height: ".0625rem",
    backgroundColor: "rgba(255, 255, 255, 1)",
    top: "31.4375rem",
    left: "10.3125rem",
    position: "absolute",
}

const ContactInfo = () => {

    const { developersData } = useDeveloperContext()

    return (
        <>
            <div className='msgContainer'>
                <div className='contactContainer'>
                    <div className='contactTitle'>Contact</div>
                    <>
                        {
                            developersData.map((developer, index) => (
                                <div className='contactMsg' key={developer.id} > {developer.contactMessage} </div>
                            ))
                        }
                    </>
                </div>
                <div className='msgFormContainer'>
                    <div className='nameContainer'>
                        <div className='formField'>
                            <label className='formFieldLabel' >Name</label>
                            <div className='inputContainer'><input type='text' name='fullName' style={inputStyle} placeholder='E.g. "John Smith"' /></div>
                        </div>
                        <div className='contactDivider' ></div>
                    </div>
                    <div className='emailAdd'>
                        <div className='formField'>
                            <label className='formFieldLabel' >Email</label>
                            <div className='inputContainer'><input type='text' name='emailAdd' style={inputStyle} placeholder='E.g. "johnsmith@somewhere.com"' /></div>
                        </div>
                        <div className='contactDivider' ></div>
                    </div>
                    <div className='msg'>
                        <div className='formMsgField'>
                            <label className='formMsgLabel' >Message</label>
                            <div className='inputMsgContainer'><input type='text' name='msg' style={inputStyle} placeholder='Please enter your message.' /></div>
                        </div>
                        <div className='contactDivider' ></div>
                    </div>
                    <div className='sendMsg'>
                        <button style={sendMsgBtnStyle} className='sendMsgBtn' >send message</button>
                        <div style={msgBtnRecStyle} ></div>
                    </div>
                </div>
            </div>
            <div style={contactInfoDivider} ></div>
            <div className='bottomLine'>
                <div><NameHeader /></div>
                <div><DevContactLinks /></div>
            </div>
        </>
    )
}

export default ContactInfo

