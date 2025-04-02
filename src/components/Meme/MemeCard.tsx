import { useState } from "react";
import { Meme } from "../../utils/types";
import { FaEye, FaShareAlt, FaCheck } from "react-icons/fa"; // Importing the icons
import { Link } from "react-router-dom";

interface MemeCardProps {
  meme: Meme;
}

const MemeCard: React.FC<MemeCardProps> = ({ meme }) => {
  const [copied, setCopied] = useState(false);

  function copyToClipboard(text: string) {
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      susCopyToClipboard(text);
    }
  }

  function susCopyToClipboard(text: string) {
    // very sus way to copy :)
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus({ preventScroll: true });
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Unable to copy to clipboard", err);
    }
    document.body.removeChild(textArea);
  }

  return (
    <div
      key={meme.id}
      className="flex flex-col justify-between bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="relative w-full h-64 bg-gray-200 overflow-hidden">
        <img
          src={meme.url}
          alt={meme.name}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-bold text-xl text-gray-900">{meme.name}</h3>

        <p className="text-gray-600 text-sm">
          {meme.captions || "No caption available"} Captions
        </p>

        <div className="mt-2 text-gray-700">
          <span className="font-semibold text-sm">
            {meme.box_count} box(es)
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-2 border-t-2 border-gray-100 bg-gray-50">
        <Link
          to={meme.url}
          className="flex items-center text-sm text-blue-500 hover:text-blue-700 gap-1 cursor-pointer"
        >
          <FaEye className="text-lg" />
          View Meme
        </Link>
        <button
          className={`flex items-center text-sm gap-1 cursor-pointer ${
            copied ? "text-green-500" : "text-blue-500 hover:text-blue-700"
          }`}
          onClick={() => copyToClipboard(meme.url)}
        >
          {copied ? (
            <FaCheck className="text-lg" />
          ) : (
            <FaShareAlt className="text-lg" />
          )}
          {copied ? "Copied!" : "Share"}
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
