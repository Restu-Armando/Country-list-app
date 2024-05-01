// src/components/CountryDetail.js

import React from "react";
import "./styles.css";

const CountryDetail = ({ country }) => {
  return (
    <div className="container">
      <div className="country-detail">
        <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Emoji: {country.emoji}</p>
        <p>Currency: {country.currency}</p>
      </div>
    </div>
  );
};

export default CountryDetail;
