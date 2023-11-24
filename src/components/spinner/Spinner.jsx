import React from "react";

import "./style.css";

const Spinner = ({ initial }) => {
  return (
    <div
      className={`loadingSpinner w-full h-[125px] relative flex justify-center items-center ${
        initial ? "initial h-[700px]" : ""
      }`}
    >
      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          stroke="lightblue"
          strokeLinecap="round"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Spinner;
