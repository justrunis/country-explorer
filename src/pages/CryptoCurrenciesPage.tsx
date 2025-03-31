import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pager from "../components/UI/Pager";
import axios from "axios";
import LoadingIndicator from "../components/UI/LoadingIndicator";
import { Crypto } from "../utils/types";
import CryptoCard from "../components/Crypto/CryptoCard";

export default function CryptoCurrenciesPage() {
  const [cryptoCurrencies, setCryptoCurrencies] = useState<Crypto[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Use search params
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    document.title = "Crypto Currencies";
    fetchCryptoCurrencies(page);
  }, [page]);

  async function fetchCryptoCurrencies(currentPage: number) {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.coinlore.net/api/tickers/?start=${
          (currentPage - 1) * 50
        }&limit=50`
      );
      setCryptoCurrencies(response.data.data);
    } catch (err) {
      setError("Could not find crypto information");
    } finally {
      setIsLoading(false);
    }
  }

  function handlePageChange(newPage: number) {
    setSearchParams({ page: newPage.toString() }); // Update URL
  }

  return (
    <div className="mt-5">
      <h1 className="text-3xl font-semibold mb-6 text-center">
        Crypto Currencies
      </h1>

      <div className="my-10">
        <Pager
          currentPage={page}
          totalPages={Math.ceil(1000 / 50)}
          onPageChange={handlePageChange}
        />
      </div>

      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      <div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {cryptoCurrencies.map((crypto) => (
            <CryptoCard key={crypto.id} crypto={crypto} />
          ))}
        </div>
        <div className="my-10">
          <Pager
            currentPage={page}
            totalPages={Math.ceil(1000 / 50)}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
}
