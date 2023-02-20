import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import Files from "../../components/files/Files";
import { Spinner } from "react-bootstrap";
import File from "../../components/files/File";

import "./dashboard.css"

const Dashboard = () => {
  const [uploadedFiles, setUploadedFiles] = useState([])
  const [loading, setLoading] = useState(true)
  const token = useSelector((state) => state.auth.accessToken);

  useEffect(() => {
    // get all the files
    fetchFiles()
  }, [])

  const fetchFiles = async () => {
    const res = await fetch('http://localhost:8000/api/storage/getfiles/', {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    if (res.ok) {
      const data = await res.json()
      setUploadedFiles(data)
      setLoading(false)
    } else {
      // show alert
    }
  }

  if (loading === false) {
    return (
      <div className="dashboard">
        <Header />
        <div className="files-section">
          <h3>My Files</h3>
          <hr />
          {uploadedFiles.map(file => {
            return (
              <File key={file} file={file} />
            )
          })}
        </div>
      </div>
    )
  } else {
    // return loading thing
    <div className="loading">
      <Spinner></Spinner>
    </div>
  }

}

export default Dashboard