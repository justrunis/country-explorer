import React from "react";

interface SearchBarProps {
  query: string;
  placeholder: string;
  setQuery: (query: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  query,
  setQuery,
  onSearch,
  placeholder,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="border p-2 rounded-lg w-64 shadow-sm bg-white"
      />
      <button
        onClick={onSearch}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 cursor-pointer"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
