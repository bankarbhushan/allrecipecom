import React, { useState } from "react";
import Mealscard from "./Mealscard";
import Category from "./Category";
import Search from "./Search";
import About from "./About";
import ChefUI from "./CefUI";
import Footer from "./Footer";
import LatterSearchButton from "./LatterSearchButton";

const MainPage = () => {
  const [data, setData] = useState(null); // Holds search results
  const [msg, setMsg] = useState(""); // Message for no results
  const [searchInput, setSearchInput] = useState(""); // Controls search bar input

  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4 pt-16">
        {/* Pass setSearchInput to LatterSearchButton */}
        <LatterSearchButton setSearchInput={setSearchInput} />

        {/* Pass searchInput to Search */}
        <Search
          setData={setData}
          setMsg={setMsg}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />

        <div className="resultsContainer w-full max-w-4xl mt-6 flex flex-wrap justify-center items-start space-y-4">
          {data ? (
            data.length > 0 ? (
              <Mealscard detail={data} />
            ) : (
              <p className="text-gray-600 text-center mt-8">
                {msg || "No Result Fond "}
              </p>
            )
          ) : (
            <p className="text-gray-600 text-center mt-8">
              Please search for a meal.
            </p>
          )}
        </div>
        <Category />

        <About />
        <ChefUI />
      </div>
    </>
  );
};

export default MainPage;
