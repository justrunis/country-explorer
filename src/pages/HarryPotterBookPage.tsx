import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Book } from "../utils/types";
import axios from "axios";
import LoadingIndicator from "../components/UI/LoadingIndicator";

export default function HarryPotterBookPage() {
  const id = useParams().id;
  const [book, setBook] = useState<Book | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      document.title = "Unknown";
      const response = await axios.get(
        `https://potterapi-fedeperin.vercel.app/en/books?index=${id}`
      );
      document.title = response.data?.title;
      setBook(response.data);
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
    <div className="flex flex-row items-start justify-center bg-white shadow-lg rounded-lg my-10">
      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}

      {book && (
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            {book?.originalTitle || "Unknown Title"}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src={
                  book?.cover ||
                  "https://via.placeholder.com/300x400?text=No+Image"
                }
                alt={book?.originalTitle}
                className="rounded-lg shadow-md w-64 h-96 object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 text-gray-700">
              <p className="text-justify text-lg">
                {book?.description || "No description available."}
              </p>

              <div className="flex flex-col gap-2 text-gray-600">
                <span className="flex items-center gap-2">
                  📖 <strong>Pages:</strong> {book?.pages || "N/A"}
                </span>

                <span className="flex items-center gap-2">
                  📅 <strong>Release Date:</strong>{" "}
                  {book?.releaseDate || "Unknown"}
                </span>

                <span className="flex items-center gap-2">
                  🔢 <strong>Book Number:</strong> {book?.number || "N/A"}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
