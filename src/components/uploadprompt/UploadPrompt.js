import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import "./uploadprompt.css"

const UploadPrompt = ({ onClose }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [files, setFiles] = useState([])
  const fileInputRef = useRef(null)
  const token = useSelector((state) => state.auth.accessToken);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  }
  
  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFiles = e.dataTransfer.files;
    setFiles([...files, droppedFiles])

  }

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...files]
    newFiles.splice(index, 1)
    setFiles(newFiles)
  }

  const handleUploadFiles = (e) => {
    // send files to backend
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('file', files[i][0])
    }
    
    const res = fetch('http://localhost:8000/api/storage/upload/', {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData,
    })
  }

  return (
    <div className="overlay-container">
      <div className="upload-prompt"
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={(e) => handleDrop(e)}
        // style={{ borderColor: isDragging ? "#d44179" : "#eee" }}
      >
        <div className="header">
          <button className="close-button" onClick={onClose}>X</button>
        </div>

        <div className="upload-section" onClick={handleClick}>
          <label className="file-input-label">
            <input type="file" className="file-input" multiple ref={fileInputRef} style={{display: "none"}} onChange={(e) => setFiles([...files, e.target.files])} />
            {files.length === 0 &&
              <span>Drag and drop files here, or click to select files</span>
            }
          </label>

          <ul className="file-list">
            {files.map((file, index) => {
              return(
                <li key={file[0].name}>
                  {file[0].name}
                  <button className="" onClick={() => handleRemoveFile(index)}>X</button>
                  <hr></hr>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="footer">
          <button className="upload-button" onClick={() => handleUploadFiles()}>Upload</button>
        </div>

      </div>
    </div>
  )
}

export default UploadPrompt;