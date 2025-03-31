import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface PagerProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pager: React.FC<PagerProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-center space-x-4 mt-6">
      <button
        className={`px-3 py-2 rounded-md text-white font-semibold transition cursor-pointer ${
          currentPage === 1
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FaChevronLeft />
      </button>

      <span className="text-lg font-medium text-gray-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        className={`px-3 py-2 rounded-md text-white font-semibold transition cursor-pointer ${
          currentPage === totalPages
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pager;
