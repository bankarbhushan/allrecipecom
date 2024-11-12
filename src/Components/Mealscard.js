import React from "react";
import { NavLink } from "react-router-dom";

const Mealscard = ({ detail }) => {
  console.log(detail);

  return (
    <div className="meals grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {!detail ? (
        <p className="text-center text-lg font-semibold text-red-500">
          Sorry, Data Not Found
        </p>
      ) : (
        detail.map((curItem) => {
          return (
            <div
              className="mealImg bg-white rounded-lg shadow-md p-4 flex flex-col items-center justify-between hover:shadow-xl transition-shadow duration-300"
              key={curItem.idMeal}
            >
              <img
                src={curItem?.strMealThumb}
                alt={curItem?.strMeal}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <p className="text-xl font-semibold text-center text-gray-800 mb-4">
                {curItem?.strMeal}
              </p>
              <NavLink to={`/meal/${curItem?.idMeal}`} className="w-full">
                <button className="w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors duration-300">
                  Recipe
                </button>
              </NavLink>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Mealscard;
