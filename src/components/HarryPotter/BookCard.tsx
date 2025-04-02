import { Book } from "../../utils/types";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <Link
      key={book.index}
      to={`/hp/books/${book.index}`}
      className="max-w-xs bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
    >
      <img
        className="w-full"
        src={book.cover || "https://via.placeholder.com/200x300?text=No+Image"}
        alt={book.title}
      />

      <div className="p-4 text-center">
        <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
      </div>
    </Link>
  );
};

export default BookCard;
