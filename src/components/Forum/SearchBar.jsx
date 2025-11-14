function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <input
        type="text"
        placeholder="🔍 Search thread titles..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xl mx-auto"
      />
    </div>
  );
}

export default SearchBar;
