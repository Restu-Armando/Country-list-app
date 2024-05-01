import React, { useState } from "react";
import Modal from "./Modal";
import "../index.css";

const CountryCard = ({ country }) => {
  // State untuk menentukan apakah modal ditampilkan atau tidak
  const [showModal, setShowModal] = useState(false);

  // Handler untuk menampilkan atau menyembunyikan modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      {/* Card negara yang dapat diklik untuk menampilkan modal */}
      <div className="card" onClick={toggleModal}>
        <div className="card-content">
          <h2 className="card-title">{country.name}</h2>
          <p className="card-detail">
            <span>Capital:</span> {country.capital}
          </p>
          <p className="card-detail">
            <span>Emoji:</span> {country.emoji}
          </p>
          <p className="card-detail">
            <span>Currency:</span> {country.currency}
          </p>
        </div>
      </div>
      {/* Menampilkan modal jika state showModal bernilai true */}
      {showModal && <Modal country={country} onClose={toggleModal} />}
    </>
  );
};

export default CountryCard;
