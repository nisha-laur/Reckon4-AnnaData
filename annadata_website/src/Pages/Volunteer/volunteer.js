import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar/navbar';
import './volunteer.css'
import drone from '../../Assets/img1.png'
import { toast } from 'react-toastify';

export default function Volunteer() {
    const [name, setname] = useState('');
    const [email, seteemail] = useState('');
    const [phone, setphone] = useState('');
    const [education, seteducation] = useState('');
    const [address, setaddress] = useState('');
    const [desc, setdesc] = useState('');

    const navigate = useNavigate();
    const submit_form = async () => {
        const form_data = {
            "name": name,
            "email": email,
            "phone": phone,
            "education": education,
            "address": address,
            "desc": desc,
        }
        console.log(form_data);
        await fetch('http://127.0.0.1:5000/volunteer', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form_data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        toast.success("Data Uploaded Successfully")
    }
    return (
        <div className="body">
            <Navbar />
            <div className="drone-window">
                <div className="drone-form">
                    <h4>Volunteer Form</h4>
                    <div className="fields">
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Name' value={name} onChange={e => setname(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Email' value={email} onChange={e => seteemail(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Phone Number' value={phone} onChange={e => setphone(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <input type="text" className="name" placeholder='Education' value={education} onChange={e => seteducation(e.target.value)} />
                        </div>
                        <div className="input-field">
                            <textarea name="address" placeholder='Enter Your Address' value={address} onChange={e => setaddress(e.target.value)}></textarea>
                        </div>
                        <div className="input-field">
                            <textarea name="description" placeholder='Something Special About You...' value={desc} onChange={e => setdesc(e.target.value)}></textarea>
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button onClick={submit_form}>Submit</button>
                    </div>
                </div>
                <div className="drone-img">
                    <img src={drone} alt="drone" />
                </div>
            </div>
        </div>
    )
}
