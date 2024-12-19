import React from 'react';
import './Modal.css'; // Import the CSS for modal styles

const Modal = ({ isOpen, onClose, imageSrc, altText }) => {
  if (!isOpen) return null; // If modal isn't open, return nothing

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt={altText} className="modal-image" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
