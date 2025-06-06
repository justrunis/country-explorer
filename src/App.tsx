import HomePage from "./pages/HomePage";
import CountrySearchPage from "./pages/CountrySearchPage";
import DictionaryPage from "./pages/DictionaryPage";
import CryptoPage from "./pages/CryptoPage";
import CryptoCurrenciesPage from "./pages/CryptoCurrenciesPage";
import CryptoCurrencyPage from "./pages/CryptoCurrencyPage";
import HarryPotterCharactersPage from "./pages/HarryPotterCharactersPage";
import HarryPotterCharacterPage from "./pages/HarryPotterCharacterPage";

import NavBar from "./components/UI/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HarryPotterStartingPage from "./pages/HarryPotterStartingPage";
import NotFound from "./pages/NotFoundPage";
import HarryPotterBooksPage from "./pages/HarryPotterBooksPage";
import HarryPotterBookPage from "./pages/HarryPotterBookPage";
import HarryPotterSpellsPage from "./pages/HarryPotterSpellsPage";
import MemesPage from "./pages/MemesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex flex-col justify-center items-center">
          <Routes>
            <Route path="*" element={<NotFound />} />
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
            <Route path="/hp" element={<HarryPotterStartingPage />} />
            <Route
              path="/hp/characters"
              element={<HarryPotterCharactersPage />}
            />
            <Route
              path="/hp/characters/:id"
              element={<HarryPotterCharacterPage />}
            />
            <Route path="/hp/books" element={<HarryPotterBooksPage />} />
            <Route path="/hp/books/:id" element={<HarryPotterBookPage />} />
            <Route path="/hp/spells" element={<HarryPotterSpellsPage />} />
            <Route path="/memes" element={<MemesPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
