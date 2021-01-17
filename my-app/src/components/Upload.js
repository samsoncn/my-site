import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import './Gallery.css';

function Upload() {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpg', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        }
        else {
            setFile(null);
            setError('Please select an image file (png, jpg, or jpeg)');

        }

    };
    return (
        <>
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
        <div className='display'>
            { error && <div className='error'>{ error }</div> }
            { file && <div>{ file.className } </div >}
            { file && <ProgressBar file={file} setFile={setFile} /> }
        </div>
        </form>
        </>

    )
}

export default Upload;