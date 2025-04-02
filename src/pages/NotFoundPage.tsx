import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-gray-100 my-10 p-16">
      <img
        src="https://media4.giphy.com/media/UoeaPqYrimha6rdTFV/giphy.gif"
        alt="404 Not Found"
        className="w-64 h-64 object-contain"
      />

      <h1 className="text-5xl font-bold text-gray-800 mt-6">Oops!</h1>
      <p className="text-lg text-gray-600 mt-2">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        🔙 Go Home
      </Link>
    </div>
  );
}
