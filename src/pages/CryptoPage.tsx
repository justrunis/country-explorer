import { useEffect, useState } from "react";
import axios from "axios";
import { GlobalCrypto } from "../utils/types";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import GlobalStats from "../components/Crypto/GlobalStats";
import { Link } from "react-router-dom";

export default function CryptoPage() {
  const [globalData, setGlobalData] = useState<GlobalCrypto | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Crypto";
    fetchGlobalCryptoData();
  }, []);

  const fetchGlobalCryptoData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("https://api.coinlore.net/api/global/");
      setGlobalData(response.data[0]);
    } catch (err) {
      setError("Global Crypto data not found");
    }
    setIsLoading(false);
  };

  return (
    <div className="text-center bg-blue-300 rounded-lg shadow-md p-8 flex flex-col items-center m-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
        Crypto Market Overview
      </h2>

      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {globalData && <GlobalStats globalData={globalData} />}
      <div className="my-5">
        <Link
          to="/crypto/currencies"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 cursor-pointer"
        >
          View Crypto Currencies
        </Link>
      </div>
    </div>
  );
}
