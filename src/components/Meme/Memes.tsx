import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIndicator from "../UI/LoadingIndicator";
import { Meme } from "../../utils/types";
import MemeCard from "./MemeCard";

const Memes: React.FC = () => {
  const [memes, setMemes] = useState<Meme[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("https://api.imgflip.com/get_memes");
      console.log(response.data.data.memes);
      setMemes(response?.data?.data?.memes);
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
      <h2 className="text-3xl font-bold mb-6 text-center">Top memes</h2>

      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {memes && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {memes.map((meme) => (
            <MemeCard meme={meme} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Memes;
