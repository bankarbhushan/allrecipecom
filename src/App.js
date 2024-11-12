import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import MealInfo from "./Components/MealInfo";
import CategoryInfo from "./Components/CategoryInfo";
import Header from "./Components/Header";

function App() {
  return (
    <>
      {/* Header component */}
      <Header />

      {/* Define routes */}
      <Routes>
        {/* Main page route */}
        <Route path="/" element={<MainPage />} />

        {/* Meal information page route */}
        <Route path="/meal/:idMeal" element={<MealInfo />} />

        {/* Category information page route */}
        <Route path="/category/:idCategory" element={<CategoryInfo />} />
      </Routes>
    </>
  );
}

export default App;
