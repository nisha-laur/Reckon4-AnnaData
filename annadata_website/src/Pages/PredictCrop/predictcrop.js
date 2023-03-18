import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/navbar';
import './predictcrop.css'
import Loader from '../../Components/Loader/loader'

export default function Prediction() {
    const [nitro, setNitro] = useState(null);
    const [phosp, setPhosp] = useState(null);
    const [potassium, setPotassium] = useState(null);
    const [rain, setRain] = useState(null);
    const [humid, setHumid] = useState(null);
    const [ph, setpH] = useState(null);
    const [temp, setTemp] = useState(null);
    const [disabled, setdis] = useState(false);
    const [crop, setCrop] = useState('');
    const [display, setDisplay] = useState('none');

    const reset = () => {
        setNitro('');
        setHumid('');
        setPhosp('');
        setPotassium('');
        setRain('');
        setTemp('');
        setpH('');
    }


    const submit_data = async () => {
        const window = document.getElementById('res-window');
        window.style.display = 'none';
        if (nitro === '' || nitro === null || phosp === '' || phosp === null || potassium === '' || potassium === null
            || humid === '' || humid === null || rain === '' || rain === null || temp === '' || temp === null || ph === '' || ph === null) {
            alert("Enter all fields");
        }
        else if (nitro < 0 || nitro > 140) {
            alert('Enter Nitrogen value in proper range');
        }
        else if (phosp < 5 || phosp > 145) {
            alert('Enter Phosphorous value in proper range');
        }
        else if (potassium < 5 || potassium > 205) {
            alert('Enter Potassium value in proper range');
        }
        else if (temp < 8 || temp > 45) {
            alert('Enter Temperature value in proper range');
        }
        else if (humid < 14 || humid > 100) {
            alert('Enter Humidity value in proper range');
        }
        else if (ph < 3.5 || ph > 10) {
            alert('Enter pH value in proper range');
        }
        else if (rain < 20 || rain > 300) {
            alert('Enter Rainfall value in proper range');
        }
        else {
            setDisplay('block');
            const data = {
                'nitro': nitro,
                'phosp': phosp,
                'potassium': potassium,
                'rain': rain,
                'humid': humid,
                'temp': temp,
                'ph': ph
            }
            await fetch("http://127.0.0.1:5000/predict", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(data => { setCrop(data['crop']) })
            setDisplay('none');
            window.style.display = 'block';
        }
    }

    const change_data = () => {
        setdis(false);
        const window = document.getElementById('res-window');
        window.style.display = 'none';
        reset();
    }



    return (
        <div className="body">
            <Navbar />
            <div className="prediction-window">
                <div className="predict-form">
                    <h3>Please enter the following values</h3>
                    <div className="fields">
                        <div className="input-field">
                            <input type="number" className='nitrogen' id='nitrogen' placeholder='Enter Nitrogen Value (0-140)' value={nitro} onChange={(e) => { setNitro(e.target.value) }} disabled={disabled} />
                        </div>
                        <div className="input-field">
                            <input type="number" className='potassium' id='potassium' placeholder='Enter Potassium Value (5-145)' value={potassium} onChange={(e) => { setPotassium(e.target.value) }} disabled={disabled} />
                        </div>
                        <div className="input-field">
                            <input type="number" className='phosphorus' id='phosphorus' placeholder='Enter Phosphorus Value (5-205)' value={phosp} onChange={(e) => { setPhosp(e.target.value) }} disabled={disabled} />
                        </div>
                        <div className="input-field">
                            <input type="number" className='rainfall' id='rainfall' placeholder='Enter Rainfall (in mm) (20-300)' value={rain} onChange={(e) => { setRain(e.target.value) }} disabled={disabled} />
                        </div>
                        <div className="input-field">
                            <input type="number" className='humidity' id='humidity' placeholder='Enter Humidity Value (14-100)' value={humid} onChange={(e) => { setHumid(e.target.value) }} disabled={disabled} />
                        </div>
                        <div className="input-field">
                            <input type="number" className='temp' id='temp' placeholder='Enter Temperature (in C) (8-45)' value={temp} onChange={(e) => { setTemp(e.target.value) }} disabled={disabled} />
                        </div>
                        <div className="input-field">
                            <input type="number" className='ph' id='ph' placeholder='Enter pH Value (3.5-10)' min='0' max='14' value={ph} onChange={(e) => { setpH(e.target.value) }} disabled={disabled} />
                        </div>
                    </div>
                    <div className="submit-btn">
                        <button onClick={submit_data}>Submit</button>
                    </div>
                </div>
                <Loader display={display} />
                <div className="result-window" id='res-window'>
                    <div className="given-data">
                        <div className='data'>
                            <div className="row1">
                                <h4>Nitrogen</h4>
                                <h4>Phosphorous</h4>
                                <h4>Potassium</h4>
                                <h4>Rainfall</h4>
                                <h4>Humidity</h4>
                                <h4>Temperature</h4>
                                <h4>pH </h4>
                            </div>
                            <div className="row2">
                                <div className="row1">
                                    <h4>{nitro}</h4>
                                    <h4>{phosp}</h4>
                                    <h4>{potassium}</h4>
                                    <h4>{rain}</h4>
                                    <h4>{humid}</h4>
                                    <h4>{temp}</h4>
                                    <h4>{ph}</h4>
                                </div>
                            </div>
                        </div>
                        <div className="result">
                            <h3>By your given data we suggest you to grow <b><u>{crop}</u></b> because of your current soil condition</h3>
                            <button onClick={change_data}>Change Data</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
