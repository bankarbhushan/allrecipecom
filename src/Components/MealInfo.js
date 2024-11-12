// import React, { useState, useEffect } from "react";
// import { NavLink, useParams } from "react-router-dom";
// import { getInfo } from "../api/api"; // Import the getInfo function for API calls
// import SimmerEffect from "./SimmerEffect"; // Import shimmer effect component
// import HomeIcon from "@mui/icons-material/Home"; // Import the HomeIcon component from Material-UI

// const MealInfo = () => {
//   // Get the meal ID from the route parameter
//   const { idMeal } = useParams();

//   // State to store meal data and loading status
//   const [mealInfo, setMealInfo] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch meal information from API
//     const fetchMealInfo = async () => {
//       setLoading(true); // Set loading to true while fetching data
//       const data = await getInfo(idMeal); // Call the API with the `idMeal`
//       if (data) {
//         setMealInfo(data); // Set meal data if found
//       } else {
//         console.log("Meal not found"); // Log if meal is not found
//       }
//       setLoading(false); // Set loading to false after fetching data
//     };

//     if (idMeal) {
//       fetchMealInfo(); // Call fetch function if `idMeal` exists
//     }
//   }, [idMeal]); // Dependency array to trigger fetch on `idMeal` change

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
//       {loading ? (
//         // Show shimmer effect while loading data
//         <SimmerEffect />
//       ) : mealInfo ? (
//         // Show meal information if data is available
//         <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
//           {/* Meal Title with Home Icon */}
//           <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
//             {mealInfo.strMeal}
//             <NavLink to="/">
//               <HomeIcon
//                 className="ml-2 text-gray-500 float-start"
//                 sx={{ fontSize: 40, color: "#ff9800" }}
//               />
//               {/* Home Icon linked to home page */}
//             </NavLink>
//           </h2>

//           {/* Meal Image */}
//           <div className="flex justify-center mb-6">
//             <img
//               src={mealInfo.strMealThumb}
//               alt={mealInfo.strMeal}
//               className="w-full h-60 object-cover rounded-lg shadow-md"
//             />
//           </div>

//           {/* Meal Instructions */}
//           <div className="text-gray-700">
//             <h3 className="text-2xl font-semibold mb-4">Instructions</h3>
//             <p>{mealInfo.strInstructions}</p>
//           </div>

//           <div>
//             <video width="750" height="500" controls>
//               <source
//                 src="https://www.youtube.com/watch?v=tY3taZO3Aro"
//                 type="video/mp4"
//               />
//             </video>
//           </div>
//         </div>
//       ) : (
//         // Message if meal information is not found
//         <p className="text-center text-red-500">Meal information not found.</p>
//       )}
//     </div>
//   );
// };

// export default MealInfo;

import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getInfo } from "../api/api"; // Import the getInfo function for API calls
import SimmerEffect from "./SimmerEffect"; // Import shimmer effect component
import HomeIcon from "@mui/icons-material/Home"; // Import the HomeIcon component from Material-UI

const MealInfo = () => {
  // Get the meal ID from the route parameter
  const { idMeal } = useParams();

  // State to store meal data and loading status
  const [mealInfo, setMealInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch meal information from API
    const fetchMealInfo = async () => {
      setLoading(true); // Set loading to true while fetching data
      const data = await getInfo(idMeal); // Call the API with the `idMeal`
      if (data) {
        setMealInfo(data); // Set meal data if found
      } else {
        console.log("Meal not found"); // Log if meal is not found
      }
      setLoading(false); // Set loading to false after fetching data
    };

    if (idMeal) {
      fetchMealInfo(); // Call fetch function if `idMeal` exists
    }
  }, [idMeal]); // Dependency array to trigger fetch on `idMeal` change

  // Function to render ingredients and measurements
  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = mealInfo[`strIngredient${i}`];
      const measure = mealInfo[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(
          <li key={i} className="text-gray-700">
            {ingredient} - {measure || "to taste"}
          </li>
        );
      }
    }
    return ingredients;
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
      {loading ? (
        // Show shimmer effect while loading data
        <SimmerEffect />
      ) : mealInfo ? (
        // Show meal information if data is available
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
          {/* Meal Title with Home Icon */}
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
            {mealInfo.strMeal}
            <NavLink to="/">
              <HomeIcon
                className="ml-2 text-gray-500 float-start"
                sx={{ fontSize: 40, color: "#ff9800" }}
              />
              {/* Home Icon linked to home page */}
            </NavLink>
          </h2>

          {/* Meal Image */}
          <div className="flex justify-center mb-6">
            <img
              src={mealInfo.strMealThumb}
              alt={mealInfo.strMeal}
              className="w-full h-80 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Meal Instructions */}
          <div className="text-gray-700 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Instructions</h3>
            <p>{mealInfo.strInstructions}</p>
          </div>

          {/* Meal Ingredients */}
          <div className="text-gray-700 mb-6">
            <h3 className="text-2xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc pl-6">{renderIngredients()}</ul>
          </div>

          {/* Video Instructions */}
          {mealInfo.strYoutube && (
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-4">
                Video Instructions
              </h3>
              <iframe
                width="full"
                height="200"
                src={mealInfo.strYoutube.replace("watch?v=", "embed/")}
                title="Meal Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Recipe Source */}
          {mealInfo.strSource && (
            <div className="text-gray-700 mt-4 w-full md:w-fit">
              <h3 className="text-2xl font-semibold mb-2">Recipe Source</h3>
              <a
                href={mealInfo.strSource}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline hover:text-blue-800"
              >
                {mealInfo.strSource}
              </a>
            </div>
          )}
        </div>
      ) : (
        // Message if meal information is not found
        <p className="text-center text-red-500">Meal information not found.</p>
      )}
    </div>
  );
};

export default MealInfo;
