import React, { useRef } from "react";
import "./ImageUpload.css";

const ImageUpload = ({ onImageSelect, currentImage, slideTitle }) => {
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageSelect(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onImageSelect(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div
      className="image-upload-area"
      onClick={handleClick}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        style={{ display: "none" }}
      />

      {currentImage ? (
        <div className="image-preview">
          <img src={currentImage} alt={slideTitle} className="preview-img" />
          <div className="change-overlay">
            <span>Click to change</span>
          </div>
        </div>
      ) : (
        <div className="upload-placeholder">
          <div className="upload-icon">📸</div>
          <p className="upload-text">Click or drag to upload</p>
          <p className="upload-subtext">Image for {slideTitle}</p>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
