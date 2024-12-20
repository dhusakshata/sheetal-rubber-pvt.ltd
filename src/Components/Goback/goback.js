
import React from "react";
import "./goback.css";

function GoBackButton() {
  const handleGoBack = () => {
    if (window.history.length > -1) {
      window.history.back(); // Navigate to the previous page
    } else {
      alert("No previous page found in history!");
    }
  };

  return (
    <button className="modern-go-back-button" onClick={handleGoBack}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-left"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
       Products
    </button>
  );
}

export default GoBackButton;
