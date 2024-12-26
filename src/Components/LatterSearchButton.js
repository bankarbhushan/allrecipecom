import React, { useEffect, useState } from "react";

const LatterSearchButton = ({ setSearchInput }) => {
  const [latter, setLatter] = useState([]);
  console.log(latter);

  async function getLatter() {
    try {
      const data = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const json = await data.json();
      console.log(json);
      setLatter(json.categories);
    } catch {
      console.error("error");
    }
  }

  useEffect(() => {
    getLatter();
  }, []);

  return (
    <div className="flex justify-center w-[80vw] gap-2 mb-12">
      {latter.map((category) => (
        <button
          className="px-3 py-2 bg-slate-200 rounded-lg hover:bg-slate-300"
          key={category.idCategory}
          onClick={() => setSearchInput(category.strCategory)} // Set category in search bar
        >
          {category.strCategory}
        </button>
      ))}
    </div>
  );
};

export default LatterSearchButton;
