import React, { useState } from "react";
import Mealscard from "./Mealscard";
import Category from "./Category";
import Search from "./Search";

const MainPage = () => {
  // State to hold search results data
  const [data, setData] = useState(null); // Initialize data as null
  const [msg, setMsg] = useState(""); // Message to show if no results found

  return (
    <>
      {/* Main page container with full width, centered content, and background styling */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
        {/* Search component to update data and message based on user input */}
        <Search setData={setData} setMsg={setMsg} />

        {/* Category component to display categories */}
        <Category />

        {/* Container for displaying search results */}
        <div className="resultsContainer w-full max-w-4xl mt-6 flex flex-wrap justify-center items-start space-y-4">
          {/* Check if there is data from the search */}
          {data ? (
            data.length > 0 ? (
              // Display Mealscard component if data exists
              <Mealscard detail={data} />
            ) : (
              // Show message if no results are found
              <p className="text-gray-600 text-center mt-8">
                {msg || "No results found."}
              </p>
            )
          ) : (
            // Show prompt to search if data is null
            <p className="text-gray-600 text-center mt-8">
              Please search for a meal.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default MainPage;
