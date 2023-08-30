import React, { useState } from "react";

function FileUpload({ onFileSelect }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="file-upload">
      <label htmlFor="file-input">
        <i className="fa fa-paperclip attachment-icon"></i>
      </label>
      <input
        id="file-input"
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      {selectedFile && <p> {selectedFile.name}</p>}
    </div>
  );
}

export default FileUpload;
