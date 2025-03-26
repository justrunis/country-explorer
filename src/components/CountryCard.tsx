import React from "react";
import { FiMapPin, FiUsers, FiDollarSign, FiGlobe, FiStar  } from "react-icons/fi";
import { Country } from "../types";

interface CountryCardProps {
  country: Country;
}

const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
    console.log(country);
  return (
    <div className="mt-6 border p-6 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <h3 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
        {country.name.common}
      </h3>

      <img
        src={country.flags.png}
        alt={country.name.common}
        className="w-40 mx-auto my-4 rounded-lg shadow-sm"
      />

      <p className="flex items-center gap-2">
        <FiMapPin className="text-red-500" /> <strong>Capital:</strong> {country.capital?.[0]}
      </p>
      
      <p className="flex items-center gap-2">
        <FiUsers className="text-green-500" /> <strong>Population:</strong> {country.population.toLocaleString()}
      </p>

      <p className="flex items-center gap-2">
        <FiDollarSign className="text-yellow-500" /> 
        <strong>Currency:</strong> {Object.values(country.currencies)[0].name} ({Object.values(country.currencies)[0].symbol})
      </p>

      <p className="flex items-center gap-2">
        <FiGlobe className="text-purple-500" /> <strong>Languages:</strong> {Object.values(country.languages).join(", ")}
      </p>

      <p className="flex items-center gap-2">
        <FiStar className="text-purple-500" /> <strong>Capital:</strong> {Object.values(country.capital).join(", ")}
      </p>
    </div>
  );
};

export default CountryCard;