import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Character } from "../utils/types";
import axios from "axios";
import LoadingIndicator from "../components/UI/LoadingIndicator";

export default function HarryPotterCharacterPage() {
  const id = useParams().id;
  const [character, setCharacter] = useState<Character | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCharacter();
  }, []);

  const fetchCharacter = async () => {
    setIsLoading(true);
    try {
      document.title = "Unknown";
      const response = await axios.get(
        `https://potterapi-fedeperin.vercel.app/en/characters?index=${id}`
      );
      document.title = response.data?.fullName || "Unknown";
      console.log(response.data);

      setCharacter(response.data);
      fetchHouseIconByHouse(response.data.hogwartsHouse);
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

  const fetchHouseIconByHouse = async (house: string) => {
    console.log(house);
    try {
      const response = await axios.get(
        `https://potterapi-fedeperin.vercel.app/en/houses?search=${house}`
      );
      console.log(response.data[0]?.emoji);
      setCharacter((prevCharacter) => {
        if (!prevCharacter) return null;

        return {
          ...prevCharacter,
          houseIcon: response.data[0]?.emoji || "",
        };
      });
      console.log(character);
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Failed to fetch character");
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex flex-row items-start justify-center bg-white shadow-lg rounded-lg my-10">
      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {character && (
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg py-6 px-16">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            {character?.fullName || "Unknown Character"}
          </h2>

          <div className="flex justify-center">
            <img
              src={
                character?.image ||
                "https://via.placeholder.com/300x400?text=No+Image"
              }
              alt={character?.fullName}
              className="rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 text-gray-700">
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mt-4 text-center">
              {character?.birthdate && (
                <div className="bg-gray-100 p-3 rounded-lg">
                  <span className="font-bold">Birthdate</span>
                  <p>{character.birthdate}</p>
                </div>
              )}

              {character?.hogwartsHouse && (
                <div className="flex flex-col items-center bg-gray-100 p-3 rounded-lg gap-2">
                  <span className="font-bold">Hogwarts House</span>
                  <div className="flex items-center gap-2">
                    <p>{character.hogwartsHouse}</p>
                    {character.houseIcon && (
                      <span className="text-xl">{character.houseIcon}</span>
                    )}
                  </div>
                </div>
              )}

              {character?.interpretedBy && (
                <div className="flex flex-col bg-gray-100 p-3 rounded-lg gap-2">
                  <span className="font-bold">Played By</span>
                  <p>{character.interpretedBy}</p>
                </div>
              )}

              {character?.nickname && (
                <div className="flex flex-col bg-gray-100 p-3 rounded-lg gap-2">
                  <span className="font-bold">Nickname</span>
                  <p>{character.nickname}</p>
                </div>
              )}

              {character?.children?.length > 0 && (
                <div className="bg-gray-100 p-3 rounded-lg col-span-2">
                  <span className="font-bold">Children</span>
                  <p>{character.children.join(", ")}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
