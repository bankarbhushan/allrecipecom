import React, { useState, useEffect } from "react";
import { categoryApi } from "../api/api";
import SimmerEffect from "./SimmerEffect";
import { NavLink } from "react-router-dom";

const Category = () => {
  // State for storing categories data and loading status
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect to fetch categories on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      // Fetch categories data from the API
      await categoryApi(setCategory);
      // Set loading to false after data is fetched
      setLoading(false);
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4">
      {/* Title for Category Grid */}
      <h1 className="text-2xl font-bold text-center mb-4 text-orange-500">
        Category Grid
      </h1>

      {/* Conditional rendering based on loading status */}
      {loading ? (
        <p className="text-center">
          <SimmerEffect />
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {/* Check if categories are available */}
          {category.length > 0 ? (
            // Display each category item, limited to 5 items
            category.slice(0, 5).map((item) => (
              <NavLink
                key={item.idCategory}
                to={`/category/${item.idCategory}`}
                className="p-4 flex flex-col items-center text-center transition-transform hover:scale-105"
              >
                {/* Category name */}
                <h3 className="text-sm md:text-lg font-semibold text-slate-700 mb-2">
                  {item.strCategory}
                </h3>
                {/* Category thumbnail image */}
                <img
                  src={item.strCategoryThumb}
                  alt={item.strCategory}
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 object-cover rounded-full"
                />
              </NavLink>
            ))
          ) : (
            // Message displayed if no categories are available
            <p className="text-center text-slate-500 col-span-full">
              No categories available
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Category;
