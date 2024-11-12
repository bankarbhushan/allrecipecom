import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { categoryApi } from "../api/api";
import Category from "./Category";

const CategoryInfo = () => {
  // Retrieve category ID from the URL parameters
  const { idCategory } = useParams();

  // State to store category data and loading status
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch the specific category details based on idCategory
  useEffect(() => {
    const fetchCategory = async () => {
      // Fetch category data and find the matching category by ID
      await categoryApi((categories) => {
        const matchedCategory = categories.find(
          (cat) => String(cat.idCategory) === String(idCategory)
        );
        setCategory(matchedCategory);
      });
      setLoading(false); // Set loading to false after fetching data
    };

    fetchCategory();
  }, [idCategory]);

  // Show loading message if data is still being fetched
  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  // Show error message if the category is not found
  if (!category) {
    return <p className="text-center text-red-500">Category not found.</p>;
  }

  return (
    <div>
      {/* Display category information in a centered, styled container */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <h1 className="text-3xl font-bold text-orange-500 text-center mb-4">
          {category.strCategory}
        </h1>
        <p className="text-gray-700 text-center mb-6">
          {category.strCategoryDescription}
        </p>
        <div className="flex justify-center">
          {/* Category thumbnail image */}
          <img
            src={category.strCategoryThumb}
            alt={category.strCategory}
            className="w-48 h-48 rounded-full object-cover border-4 border-orange-500"
          />
        </div>
      </div>
      {/* Render Category component for a list of categories */}
      <Category />
    </div>
  );
};

export default CategoryInfo;
