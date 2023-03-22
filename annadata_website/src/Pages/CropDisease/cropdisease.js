import React, { useState } from 'react'
import FileInputBox from '../../Components/FileInputBox/fileinputbox'
import Navbar from '../../Components/Navbar/navbar';
import './cropdisease.css'

export default function CropDisease() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imgURL, setimgURL] = useState(null);

    const fileChangeHandler = (e) => {
        setSelectedFile(e.target.files[0]);
        console.log(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append(
            "file",
            selectedFile,
            selectedFile.name,
        );
        console.log(formData);
        const requestOption = {
            method: "POST",
            Headers: {
                'Content-Type': 'application/json',
            },
            body: formData,
        }
        setimgURL(URL.createObjectURL(selectedFile));
        fetch('http://127.0.0.1:5000/crop-disease', requestOption)
            .then(res => res.json())
            .then(data => console.log(data))
    }
    return (
        <div className="body">
            <Navbar />
            <div className="crop-disease-container">
                <div className="crop-disease-box">
                    <h3>Upload image of your crop</h3>
                    <form className="form">
                        <span className="form-title">Upload your file</span>
                        <p className="form-paragraph">
                            File should be an image
                        </p>
                        <label for="file-input" className="drop-container">
                            <span className="drop-title">Drop files here</span>
                            or
                            <input type="file" accept="image/*" required="" id="file-input" onChange={fileChangeHandler} />
                        </label>
                    </form>
                    <button onClick={handleSubmit} className='disease-submit'>Submit</button>
                </div>
            </div>
        </div>
    )
}
