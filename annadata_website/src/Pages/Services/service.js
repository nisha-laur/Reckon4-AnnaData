import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import './service.css'
import crop1 from '../../Assets/crop1.jpeg'
import service2 from '../../Assets/service2.jpeg'
import alert from '../../Assets/alert.jpeg'
import volunteer from '../../Assets/volunteer.jpeg'

export default function Service() {
    return (
        <div className="body">
            <Navbar />
            <div className="service-header">
                <div className="service-header-content">
                    <p>Our Services</p>
                    <h1>Use these growing solutions for modern farming</h1>
                </div>
            </div>
            <div className="service-section">
                <div className="service">
                    <div className="service-img">
                        <img src={crop1} alt="Crop" />
                    </div>
                    <div className="service-divider"></div>
                    <div className="service-content">
                        <div className="service-desc">
                            Predict a crop
                        </div>
                        <a href="/predict">Start</a>
                    </div>
                </div>
                <div className="service">
                    <div className="service-img">
                        <img src={service2} alt="Disease" />
                    </div>
                    <div className="service-divider"></div>
                    <div className="service-content">
                        <div className="service-desc">
                            Crop Disease Detection
                        </div>
                        <a href="/crop-disease">Start</a>
                    </div>
                </div>
                <div className="service">
                    <div className="service-img">
                        <img src={alert} alt="Alert" />
                    </div>
                    <div className="service-divider"></div>
                    <div className="service-content">
                        <div className="service-desc">
                            Get Alerts Feature
                        </div>
                        <a href="/service">Start</a>
                    </div>
                </div>
                <div className="service">
                    <div className="service-img">
                        <img src={volunteer} alt="volunteer" />
                    </div>
                    <div className="service-divider"></div>
                    <div className="service-content">
                        <div className="service-desc">
                            Volunteer Section
                        </div>
                        <a href="/service">Start</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
