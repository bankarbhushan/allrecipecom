import React, { useState } from "react";
import { allCardApi } from "../api/api";

const Search = ({ setData, setMsg }) => {
  const [search, setSearch] = useState(""); // Initialize search term
  const handleInput = (event) => {
    setSearch(event.target.value); // Update search term as user types
  };

  const getData = async () => {
    if (search.trim() === "") {
      setMsg("Please Enter Something"); // Show message if search is empty
      setData(null); // Clear any previous results
    } else {
      setMsg(""); // Clear message when search is valid
      await allCardApi(search, setData); // Call API with search term
    }
  };

  return (
    <div className="searchBar flex flex-col items-center space-y-4 w-full max-w-lg">
      <input
        type="text"
        placeholder="Search meals (e.g., Paneer...)"
        onChange={handleInput}
        value={search}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-orange-500 transition-colors duration-200 shadow-sm"
      />
      <button
        onClick={getData}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-md"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
