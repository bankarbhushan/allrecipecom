import React from "react";

import CutingImg from "../Assets/Images/download (8).jpeg";
import ladySafe from "../Assets/Images/Screenshot 2024-12-25 000819.png";

const ChefUI = () => {
  return (
    <div className="p-8 w-[80vw] mt-32">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">
          Become a true <span className="text-orange-600">chef</span> with our
          recipes.
        </h1>
        <p className="text-gray-600 mt-2">
          We are a home to a variety of recipes worldwide for you to learn.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left Card */}
        <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <img src={CutingImg} alt="Chopping vegetables" className="w-full" />
          <div className="absolute top-2 left-2 bg-black text-white text-sm px-3 py-1 rounded-full">
            Step #1
          </div>
          <div className="p-4">
            <p className="flex items-center text-gray-800 shadow-md rounded-full bg-slate-300 p-3">
              <span className="mr-2 font-mono font-semibold">✏️</span> Easy to
              follow recipes
            </p>
          </div>
        </div>

        {/* Center Card */}
        <div className="bg-orange-400 text-white rounded-lg shadow-lg p-6 relative">
          <button className="absolute top-2 right-2 bg-white text-orange-500 rounded-full p-2">
            ❤️
          </button>
          <blockquote className="text-xl font-semibold mb-4">
            "Cooking has never been this easy!"
          </blockquote>
          <div className="mt-4 flex items-center">
            <img
              src={ladySafe}
              alt="Marsha Rianty"
              className="w-16 rounded-full mr-4"
            />
            <div className="mt-6 flex flex-col">
              <p>Marsha Rianty</p>
              <p className="text-sm">Master Chef 2023</p>
            </div>
          </div>
          <p className="mt-8 text-slate-900 text-justify  ">
            Marsha Rianty is a celebrated culinary expert and the winner of
            Master Chef 2023. Known for her innovative recipes and creative
            plating, she has inspired millions of aspiring chefs worldwide. With
            years of experience in the kitchen, Marsha brings a unique blend of
            tradition and modernity to her cooking, making her a true icon in
            the culinary world. She believes that "Cooking is not just a skill,
            it's an art that tells a story
          </p>
        </div>

        {/* Right Card */}
        <div className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden">
          <img src={ladySafe} alt="Master Chef" className="w-full" />
          <div className="absolute top-2 left-2 bg-orange-400 text-white text-sm px-3 py-1 rounded-full">
            LIVE
          </div>
          <div className="absolute top-2 right-2 bg-black text-white text-sm px-3 py-1 rounded-full">
            👀 100+
          </div>
          <div className="p-4">
            <h3 className="text-gray-800 font-bold text-xl">
              Cook with Master Chefs
            </h3>
          </div>
        </div>
      </div>

      {/* Sidebar Section */}
      <div className="mt-10 bg-gray-300 rounded-lg shadow-lg p-6">
        <h1 className=" font-bold mb-4 mt-8 text-center text-4xl">
          Achievements
        </h1>
        <ul className="space-y-4 items-center flex flex-col   lg:flex-row justify-around  mt-6 ">
          <li className="flex items-center text-gray-800 shadow-lg px-5 py-24 bg-slate-50 rounded-lg hover:scale-105  ">
            <span className="mr-4">🏆</span> Cook 2 foods today ________
          </li>
          <li className="flex items-center  text-gray-800 shadow-lg px-5 py-24 bg-slate-50 rounded-lg hover:scale-105">
            <span className="mr-4">👨‍🍳</span> Live Now: Chef Mark Johnson
          </li>
          <li className="flex items-center  text-gray-800 shadow-lg px-5 py-24 bg-slate-50 rounded-lg hover:scale-105">
            <span className="mr- ">🍝</span> Today’s Recipe: Spaghetti Bolognese
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ChefUI;
