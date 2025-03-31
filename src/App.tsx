import HomePage from "./pages/HomePage";
import CountrySearchPage from "./pages/CountrySearchPage";
import DictionaryPage from "./pages/DictionaryPage";

import NavBar from "./components/UI/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow flex flex-col justify-center items-center">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country" element={<CountrySearchPage />} />
            <Route path="/dictionary" element={<DictionaryPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
