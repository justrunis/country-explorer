import HomePage from "./pages/HomePage";
import CountrySearchPage from "./pages/CountrySearchPage";
import DictionaryPage from "./pages/DictionaryPage";
import CryptoPage from "./pages/CryptoPage";
import CryptoCurrenciesPage from "./pages/CryptoCurrenciesPage";
import CryptoCurrencyPage from "./pages/CryptoCurrencyPage";

import NavBar from "./components/UI/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country" element={<CountrySearchPage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
            <Route path="/crypto" element={<CryptoPage />} />
            <Route
              path="/crypto/currencies"
              element={<CryptoCurrenciesPage />}
            />
            <Route
              path="/crypto/currencies/:id"
              element={<CryptoCurrencyPage />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
