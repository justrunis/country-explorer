import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Crypto } from "../utils/types";
import axios from "axios";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import { formatNumber } from "../utils/lib";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function CryptoCurrencyPage() {
  const id = useParams().id;
  const [crypto, setCrypto] = useState<Crypto | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCryptoById();
    document.title = crypto?.name!;
  }, []);

  const fetchCryptoById = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        ` https://api.coinlore.net/api/ticker/?id=${id}`
      );
      setCrypto(response.data[0]);
      document.title = response.data[0]?.name;
    } catch (err) {
      document.title = "Unknown Currency";
      setError("Data about Crypto not found");
    }
    setIsLoading(false);
  };

  const renderPercentage = (percent: string) => {
    const parsedPercent = parseFloat(percent);
    return (
      <div
        className={`flex items-center ${
          parsedPercent >= 0 ? "text-green-500" : "text-red-500"
        }`}
      >
        {parsedPercent >= 0 ? (
          <FaArrowUp className="mr-2" />
        ) : (
          <FaArrowDown className="mr-2" />
        )}
        {percent}%
      </div>
    );
  };

  const renderFullNumberTooltip = (formatted: string, full: number) => {
    return (
      <div className="relative group cursor-pointer">
        <span className="text-lg text-gray-800">{formatted}</span>
        <div className="absolute left-0 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded-md w-auto mt-2">
          {full > 1 ? full.toLocaleString() : full}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-row items-start justify-center w-full">
      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {crypto && (
        <div className="relative flex flex-col items-center w-full max-w-4xl px-6 py-8 mt-5 bg-white shadow-lg rounded-lg">
          <Link
            to="/crypto/currencies"
            className="absolute left-4 top-4 px-3 py-2 text-gray-700 bg-gray-200 hover:bg-gray-300 transition rounded-lg shadow-sm flex items-center gap-2"
          >
            ← Back
          </Link>

          <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">
            {crypto.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Symbol:</span>
              <p className="text-lg text-gray-800">{crypto.symbol}</p>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Rank:</span>
              <p className="text-lg text-gray-800">{crypto.rank}</p>
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Price (USD):</span>
              {renderFullNumberTooltip(
                `$${formatNumber(+crypto.price_usd)}`,
                +crypto.price_usd
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">
                Market Cap (USD):
              </span>
              {renderFullNumberTooltip(
                `$${formatNumber(+crypto.market_cap_usd)}`,
                +crypto.market_cap_usd
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Volume (24h):</span>
              {renderFullNumberTooltip(
                `$${formatNumber(crypto.volume24)}`,
                crypto.volume24
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">
                Circulating Supply:
              </span>
              {renderFullNumberTooltip(
                formatNumber(+crypto.csupply),
                +crypto.csupply
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Max Supply:</span>
              {renderFullNumberTooltip(
                formatNumber(+crypto.msupply),
                +crypto.msupply
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Total Supply:</span>
              {renderFullNumberTooltip(
                formatNumber(+crypto.tsupply),
                +crypto.tsupply
              )}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">Price in BTC:</span>
              {renderFullNumberTooltip(crypto.price_btc, +crypto.price_btc)}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">1h Change:</span>
              {renderPercentage(crypto.percent_change_1h)}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">24h Change:</span>
              {renderPercentage(crypto.percent_change_24h)}
            </div>

            <div className="flex flex-col">
              <span className="font-semibold text-gray-700">7d Change:</span>
              {renderPercentage(crypto.percent_change_7d)}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
