import React from "react";
import chardimg1 from "../Assets/Images/5501395_2871541.jpg";
import chardimg2 from "../Assets/Images/unpleased-young-male-cook-wearing-chef-uniform-glasses-holding-salad-carrot-isolated-yellow-wall.jpg";
import chardimg3 from "../Assets/Images/74494.jpg";

const AboutUs = () => {
  return (
    <section className="bg-gray-50 *:py-16 w-[80vw] m-auto mt-20">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-orange-500 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          At <span className="font-bold text-orange-600">RecipeWorld</span>, we
          believe cooking is an adventure worth sharing. Our platform is
          dedicated to bringing people together through a passion for food.
          Whether you're an experienced chef or a beginner in the kitchen, we
          provide a treasure trove of easy-to-follow recipes to inspire
          creativity and joy in every meal.
        </p>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Feature 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={chardimg3}
              alt="Global Cuisine"
              className="w-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-500">
              Explore Global Cuisine
            </h3>
            <p className="text-gray-600 mt-2">
              Discover diverse recipes from around the world and add new flavors
              to your meals.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={chardimg1}
              alt="Easy Recipes"
              className="w-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-500">
              Easy-to-Follow Recipes
            </h3>
            <p className="text-gray-600 mt-2">
              Step-by-step instructions for every dish, perfect for cooks of all
              levels.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={chardimg2}
              alt="Community"
              className="w-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-orange-500">
              Join Our Community
            </h3>
            <p className="text-gray-600 mt-2">
              Share your culinary creations and connect with food enthusiasts
              worldwide.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/"
            className="bg-orange-500 text-white py-3 px-8 rounded-lg text-lg shadow-md hover:bg-orange-600"
          >
            Explore Recipes Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
