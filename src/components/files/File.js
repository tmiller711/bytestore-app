import React from "react";
import "./file.css"

const File = ({ file }) => {

  const parseUploadedAt = () => {
    const date = file.uploaded_at.split("T")[0]
    const time = file.uploaded_at.split("T")[1].split(":").slice(0, 2).join(":")
    return `${date} ${time}`
  }
  return (
    <>
      <div className="file">
        <p>{file.file}</p>
        {console.log(file)}
        <p className="uploaded">{parseUploadedAt()}</p>
      </div>
      <hr />
    </>
  )
}

export default File;