import React from 'react'
import './fileinputbox.css'

export default function FileInputBox(props) {
    return (
        <form class="form" style={{ display: props.display }}>
            <span class="form-title">Upload your file</span>
            <p class="form-paragraph">
                File should be an image
            </p>
            <label for="file-input" class="drop-container">
                <span class="drop-title">Drop files here</span>
                or
                <input type="file" accept="image/*" required="" id="file-input" onChange={props.fileChange} />
            </label>
        </form>
    )
}
