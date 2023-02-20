import React from "react";

const Files = ({ files }) => {
  
  return (
    <div className="files-section">
      <h3>My Files</h3>
      {files.map(file => {
        return (
          <h1>{file.file}</h1>
        )
      })}
    </div>
  )
}

export default Files;