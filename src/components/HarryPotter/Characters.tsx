import { useEffect, useState } from "react";
import { Character } from "../../utils/types";
import axios from "axios";
import LoadingIndicator from "../UI/LoadingIndicator";
import CharacterCard from "./CharacterCard";

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    setLoading(true);

    try {
      const response = await axios.get(
        "https://potterapi-fedeperin.vercel.app/en/characters"
      );
      setCharacters(response.data);
    } catch (err) {
      setError("Could not fetch characters");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Harry Potter Characters
      </h2>

      {loading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {characters && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {characters.map((character) => (
            <CharacterCard character={character} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Characters;
