import { useEffect, useState } from "react";
import axios from "axios";
import LoadingIndicator from "../UI/LoadingIndicator";
import { Book } from "../../utils/types";
import BookCard from "./BookCard";

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://potterapi-fedeperin.vercel.app/en/books"
      );
      setBooks(response.data);
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
    <div className="text-center mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Harry Potter Books
      </h2>

      {isLoading && (
        <div className="text-center my-10">
          <LoadingIndicator />
        </div>
      )}

      {error && <p className="mt-4 text-red-500">{error}</p>}
      {books && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {books.map((book) => (
            <BookCard book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Books;
