import { Character } from "../../utils/types";
import { Link } from "react-router-dom";

interface CharacterCardProps {
  character: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <Link
      key={character.index}
      to={`/hp/characters/${character.index}`}
      className="max-w-xs bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        className="w-full"
        src={
          character.image || "https://via.placeholder.com/200x300?text=No+Image"
        }
        alt={character.fullName}
      />

      <div className="p-4 text-center">
        <h3 className="font-bold text-lg text-gray-800">
          {character.fullName}
        </h3>

        {character.hogwartsHouse && (
          <span
            className={`inline-block mt-2 px-3 py-1 text-sm font-semibold rounded-full 
        ${
          character.hogwartsHouse === "Gryffindor"
            ? "bg-red-500 text-white"
            : character.hogwartsHouse === "Slytherin"
            ? "bg-green-600 text-white"
            : character.hogwartsHouse === "Hufflepuff"
            ? "bg-yellow-500 text-gray-900"
            : character.hogwartsHouse === "Ravenclaw"
            ? "bg-blue-500 text-white"
            : "bg-gray-300 text-gray-800"
        }`}
          >
            {character.hogwartsHouse}
          </span>
        )}
      </div>
    </Link>
  );
};

export default CharacterCard;
