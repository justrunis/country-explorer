import { Crypto } from "../../utils/types";
import { Link } from "react-router-dom";

interface CryptoCardProps {
  crypto: Crypto;
}

const CryptoCard: React.FC<CryptoCardProps> = ({ crypto }) => {
  return (
    <Link
      to={`/crypto/currencies/${crypto.id}`}
      className="bg-blue-300 p-4 rounded-lg shadow-lg text-center transform transition-all duration-200 hover:scale-110 cursor-pointer"
    >
      <h3 className="text-xl font-semibold">{crypto.name}</h3>
      <p>{crypto.symbol}</p>
    </Link>
  );
};

export default CryptoCard;
