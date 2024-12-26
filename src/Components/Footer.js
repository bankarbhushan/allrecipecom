import React from "react";

const Footer = () => {
  return (
    <footer className=" text-black py-8 px-40 w-full  bg-gray-200">
      <div className="container ">
        {/* Logo and Description */}
        <div className=" text-center flex justify-between ">
          <h1 className="text-2xl font-bold">All Recipe</h1>
          <div className="flex space-x-6 text-sm">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="#" className="hover:underline">
              Recipes
            </a>
            <a href="http://localhost:3002/about" className="hover:underline">
              About Us
            </a>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <p className="text-sm mt-2 text-center">
          Discover the world of delicious recipes and become a chef in your own
          kitchen. Let's make cooking fun and easy!
        </p>

        {/* Social Media Links */}
      </div>

      {/* Copyright */}
      <div className="border-t border-orange-300 mt-6 pt-4 text-center text-sm">
        © 2024 RecipeWorld. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
