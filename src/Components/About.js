import React from "react";
import hero_img from "../Assets/Images/istockphoto-678603482-612x612-removebg-preview.png";
import icon1 from "../Assets/Images/heart-circle-regular-24.png";
import icon2 from "../Assets/Images/log-in-circle-regular-24.png";
import icon3 from "../Assets/Images/user-regular-24.png";

const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 ">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-4">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900">
            Adventure
          </h1>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-gray-900">
            of <span className="text-orange-600">Delicacies</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-700">
            Unlock a world of variety in culinary recipes and unleash
          </p>
          <p className="text-lg lg:text-xl text-gray-700">
            your inner chef the easy way with all recipes.
          </p>
          <button className="mt-6 px-6 py-3 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition duration-300">
            Get Started
          </button>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            alt="Delicious Food"
            src={hero_img}
            className="w-full rounded-lg transform hover:scale-105 transition duration-300"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between p-8 w-[80vw]">
        <div className="shadow-md m-3 p-4 rounded-md">
          <img alt="user icon" src={icon3} />
          <h1 className="text-2xl font-semibold my-3 ">User-Centered</h1>
          <p className="text-slate-600 my-4 ">
            Your feedback shapes our platform, ensuring a seamless and
            satisfying culinary journey.
          </p>
        </div>

        <div className="shadow-md m-3 p-4 rounded-md">
          <img alt="user icon" src={icon2} />
          <h1 className="text-2xl font-semibold my-3 ">Diverse Recipes</h1>
          <p className="text-slate-600 my-4 ">
            We celebrate diverse culinary traditions from around the world,
            inspiring you today.
          </p>
        </div>

        <div className="shadow-md m-3 p-4 rounded-md">
          <img alt="user icon" src={icon1} />
          <h1 className="text-2xl font-semibold my-3 ">Fun Community</h1>
          <p className="text-slate-600 my-4 ">
            We foster a vibrant foodie community where joy comes with sharing
            recipes with us.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
