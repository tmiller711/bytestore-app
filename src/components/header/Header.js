import React, { useState } from "react";
import UploadPrompt from "../uploadprompt/UploadPrompt";

import "./header.css"

const Header = () => {
  const [showPrompt, setShowPrompt] = useState(false)

  return (
    <div className="header">
      {showPrompt && <UploadPrompt onClose={() => setShowPrompt(false)} />}
    <button className="upload-prompt-button" onClick={() => setShowPrompt(true)}><i class='bx bx-upload'></i>Upload</button>
    </div>
  )
}

export default Header;