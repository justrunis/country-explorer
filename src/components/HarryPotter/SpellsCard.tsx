import { Spell } from "../../utils/types";
import { Link } from "react-router-dom";

interface SpellCardProps {
  spell: Spell;
}

const SpellCard: React.FC<SpellCardProps> = ({ spell }) => {
  return (
    <div className="max-w-xs bg-white rounded-2xl overflow-hidden shadow-lg p-6 transform transition-all duration-300 hover:scale-105 cursor-pointer">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{spell.spell}</h3>
      <p className="text-gray-600">
        {spell.use || "No description available."}
      </p>
    </div>
  );
};

export default SpellCard;
