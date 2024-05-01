import React, { useEffect, useState } from "react";
import { fetchCountries } from "./utils/data";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);

  // Menggunakan useEffect untuk memuat data negara saat komponen dimuat
  useEffect(() => {
    // Fungsi asinkron untuk mengambil data negara
    const fetchData = async () => {
      const data = await fetchCountries(); // Memanggil fungsi fetchCountries untuk mendapatkan data
      setCountries(data); // Mengupdate state countries dengan data yang diperoleh
    };

    fetchData(); // Memanggil fungsi fetchData untuk memuat data saat komponen dimuat
  }, []);

  // Handler yang akan dipanggil ketika suatu negara diklik
  const handleCountryClick = (country) => {
    console.log("Clicked country:", country); // Menampilkan informasi negara yang diklik ke konsol
    // Tambahkan fungsi lain yang diperlukan sesuai kebutuhan
  };

  return (
    <div className="app-container">
      <CountryList countries={countries} onCountryClick={handleCountryClick} />
    </div>
  );
}

export default App;
