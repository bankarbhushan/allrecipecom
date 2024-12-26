import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "./Components/MainPage";
import MealInfo from "./Components/MealInfo";
import CategoryInfo from "./Components/CategoryInfo";
import Header from "./Components/Header";
import Error from "./Components/Error";
import AboutUs from "./Components/AboutUs";
import Footer from "./Components/Footer";

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

        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
