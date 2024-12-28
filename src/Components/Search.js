import React, { useState, useEffect, useCallback } from "react";
import { allCardApi } from "../api/api";

const Search = ({ setData, setMsg, searchInput, setSearchInput }) => {
  const [search, setSearch] = useState(""); // Local search state

  // Memoize getData to avoid re-creating the function on every render
  const getData = useCallback(
    async (term = search) => {
      if (term.trim() === "") {
        setMsg("Please Enter Something"); // Show message if search is empty
        setData(null); // Clear any previous results
      } else {
        setMsg(""); // Clear error message
        await allCardApi(term, setData); // Call API with the search term
      }
    },
    [search, setData, setMsg]
  ); // Dependencies for getData

  // Update local state whenever the parent updates the searchInput
  useEffect(() => {
    if (searchInput) {
      setSearch(searchInput);
      getData(searchInput); // Automatically fetch data when searchInput changes
    }
  }, [searchInput, getData]); // Add getData as a dependency

  // Function to handle input changes locally
  const handleInput = (event) => {
    setSearch(event.target.value); // Update local search term
    setSearchInput(event.target.value); // Update parent searchInput state
  };

  return (
    <div className="searchBar flex flex-col items-center space-y-4 w-full max-w-lg">
      {/* Search input field */}
      <input
        type="text"
        placeholder="Search meals (e.g., Paneer...)"
        onChange={handleInput}
        value={search} // Controlled input
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors duration-200 shadow-sm"
      />
      {/* Search button */}
      <button
        onClick={() => getData()} // Fetch data on button click
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
