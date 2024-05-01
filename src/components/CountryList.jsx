import React, { useState } from "react";
import CountryCard from "./CountryCard";

const CountryList = ({ countries, onCountryClick }) => {
  // State untuk menyimpan nilai input pencarian
  const [searchTerm, setSearchTerm] = useState("");

  // Handler untuk mengubah nilai input pencarian
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Filter negara berdasarkan nilai input pencarian
  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>List of Countries</h1>
      {/* Input pencarian */}
      <input
        className="search-input"
        type="text"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={handleSearchChange} // Memanggil handler saat nilai input berubah
      />
      {/* Daftar negara yang telah difilter */}
      <div className="country-list">
        {filteredCountries.map((country) => (
          <CountryCard
            key={country.name}
            country={country}
            onCountryClick={onCountryClick}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
