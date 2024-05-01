// src/components/Modal.js

import React from "react";
import "../index.css";

const Modal = ({ country, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Emoji: {country.emoji}</p>
        <p>Currency: {country.currency}</p>
        <p>
          Languages: {country.languages.map((lang) => lang.name).join(", ")}
        </p>
        <p>Continent: {country.continent.name}</p>
        {/* Tambahkan detail negara lainnya di sini */}
      </div>
    </div>
  );
};

export default Modal;
