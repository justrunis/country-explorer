import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIndicator from "../UI/LoadingIndicator";
import { Spell } from "../../utils/types";
import SpellCard from "./SpellsCard";

const Spells: React.FC = () => {
  const [spells, setSpells] = useState<Spell[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSpells();
  }, []);

  const fetchSpells = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://potterapi-fedeperin.vercel.app/en/spells"
      );
      setSpells(response.data);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to fetch character");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="text-center m-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Harry Potter Spells
      </h2>

      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {spells && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {spells.map((spell) => (
            <SpellCard spell={spell} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Spells;
