// api.js
export const allCardApi = async (search, setData) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();
    setData(result.meals || []); // Use the setData callback to update state
  } catch (error) {
    console.error("Error fetching data:", error);
    setData([]); // Set empty array on error to clear data
  }
};

// Updated getInfo function to accept `idMeal` as a parameter
export const getInfo = async (idMeal) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    );
    const jsonData = await response.json();
    return jsonData.meals ? jsonData.meals[0] : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export const categoryApi = async (setCategory, idCategory = null) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const result = await response.json();

    // Filter for a single category if idCategory is provided
    const categories = idCategory
      ? result.categories.filter(
          (cat) => String(cat.idCategory) === String(idCategory)
        )
      : result.categories;

    setCategory(categories || []); // Update state with categories
  } catch (error) {
    console.error("Error fetching data:", error);
    setCategory([]); // Set empty array on error
  }
};
