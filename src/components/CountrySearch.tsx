import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import CountryCard from "./CountryCard";
import { Country } from "../types";

const CountrySearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState<Country | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchCountry = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    setCountry(null);

    try {
      const response = await axios.get(`https://restcountries.com/v3.1/name/${query}?fullText=true`);
      setCountry(response.data[0]);
    } catch (err) {
      setError("Country not found! Try again.");
    }
    
    setLoading(false);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">🌍 Country Explorer</h2>
      <SearchBar query={query} setQuery={setQuery} onSearch={fetchCountry} />
      
      {loading && <p className="mt-4 text-blue-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {country && <CountryCard country={country} />}
    </div>
  );
};

export default CountrySearch;