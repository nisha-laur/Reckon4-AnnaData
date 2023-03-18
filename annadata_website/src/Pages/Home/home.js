import React from 'react'
import './home.css'
import Navbar from '../../Components/Navbar/navbar'
import replit from '../../Assets/replit.png'

export default function Home() {
    return (
        <div className="home-body">
            <Navbar />
            <div className="home-header">
                <div className="header-text">
                    Digital Agriculture The Future of Indian Agriculture
                </div>
            </div>
            <div className="company-banner">
                <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a>
                <a href="/">
                    <img src={replit} alt="" />
                </a>
            </div>
        </div>
    )
}
