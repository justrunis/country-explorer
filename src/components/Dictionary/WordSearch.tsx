import { useState } from "react";
import axios from "axios";
import SearchBar from "../UI/SearchBar";
import { Word } from "../../utils/types";
import WordCard from "./WordCard";
import LoadingIndicator from "../UI/LoadingIndicator";

const WordSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [word, setWord] = useState<Word | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWord = async () => {
    if (!query) return;
    setLoading(true);
    setError("");
    setWord(null);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
      );
      setWord(response.data[0]);
    } catch (err) {
      setError("Word not found! Try again");
    }
    setLoading(false);
  };

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-center">Word Search</h2>
      <div className="flex items-center justify-center">
        <SearchBar
          query={query}
          setQuery={setQuery}
          onSearch={fetchWord}
          placeholder="Enter a word..."
        />
      </div>

      {loading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {word && <WordCard word={word} />}
    </div>
  );
};

export default WordSearch;
