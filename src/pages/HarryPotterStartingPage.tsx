import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function HarryPotterStartingPage() {
  useEffect(() => {
    document.title = "Harry Potter";
  }, []);

  return (
    <div className="text-center m-10">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
        Harry Potter Information
      </h2>

      <div className="flex justify-center">
        <img
          src="https://media0.giphy.com/media/VBGoqEIX0TWX5Kl0i0/giphy.gif?cid=6c09b9520cpf01usq77815b2ewsobcpcnjg9g3z5ava3rrok&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g"
          alt="Harry Potter"
          className="rounded-lg shadow-md w-80 h-80 object-cover"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10 max-w-lg mx-auto">
        <Link
          to="/hp/characters"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          🧙‍♂️ Characters
        </Link>

        <Link
          to="/hp/books"
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          📚 Books
        </Link>

        <Link
          to="/hp/spells"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          ✨ Spells
        </Link>
      </div>
    </div>
  );
}
