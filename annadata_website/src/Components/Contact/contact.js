import React, { useState } from 'react'
import '../Contact/contact.css'
import { FaMap, FaPhone } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Navbar/navbar';

export default function Contact() {
    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [phone, setphone] = useState(null);
    const [message, setmessage] = useState(null);


    const send_message = async () => {
        const loader = document.getElementById("loading");
        loader.style.display = 'block';
        const data = {
            "name": name,
            "mail": email,
            "phone": phone,
            "message": message,
        }
        await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                loader.style.display = 'none';
                console.log(data["status"]);
                if (data['status'] == 'success') {
                    toast.success("Message Sent Successfully", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                }
                else {
                    toast.error("Message not send", {
                        position: toast.POSITION.BOTTOM_RIGHT,
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div className="body">
            <Navbar />
            <div className="contact-window">
                <div className="contact-fields">
                    <h3>Get in touch!</h3>
                    <h4>Contact us for any query</h4>
                    <div className="address-fields">
                        <div className="field">
                            <FaMap size={25} />
                            <h4>102 Street XYZ</h4>
                        </div>
                        <div className="field">
                            <FaPhone size={25} />
                            <h4>+91 XXXXXXXXXX</h4>
                        </div>
                        <div className="field">
                            <AiOutlineMail size={25} />
                            <h4>102 Street XYZ</h4>
                        </div>
                    </div>
                    <div className="input-field">
                        <h4>Contact Form</h4>
                        <div className="text-fields">
                            <div className="left-field">
                                <div className="input">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className='name' id='name' placeholder='Enter Your Name' value={name} onChange={(e) => { setname(e.target.value) }} />
                                </div>
                                <div className="input">
                                    <label htmlFor="email">Email</label>
                                    <input type="text" className='email' id='email' placeholder='Enter Your Email' value={email} onChange={(e) => { setemail(e.target.value) }} />
                                </div>
                                <div className="input">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className='phone' id='phone' placeholder='Enter Your Phone No.' value={phone} onChange={(e) => { setphone(e.target.value) }} />
                                </div>
                            </div>
                            <div className="right-field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" value={message} onChange={(e) => { setmessage(e.target.value) }} ></textarea>
                            </div>
                        </div>
                        <div className="button-box">
                            <button onClick={send_message}>Send Message</button>
                            <div className="loading_contact" id='loading'>
                                <div className="spinner"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </div>
    )
}
