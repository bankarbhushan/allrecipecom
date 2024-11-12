import React from "react";

const SimmerEffect = () => {
  // Number of shimmer placeholders
  const shimmerCount = 10;

  return (
    <div className="flex flex-wrap justify-center items-center h-screen gap-6">
      {/* Generate shimmer placeholders */}
      {Array.from({ length: shimmerCount }).map((_, index) => (
        <div
          key={index}
          className="flex flex-col items-center w-80 p-4 bg-gray-200 rounded-lg shadow-md"
        >
          {/* Shimmering image placeholder */}
          <div className="w-full h-44 bg-gray-300 rounded-lg animate-pulse mb-4"></div>

          {/* Shimmering text placeholders */}
          <div className="w-4/5 h-6 bg-gray-300 rounded-lg animate-pulse mb-2"></div>
          <div className="w-3/4 h-6 bg-gray-300 rounded-lg animate-pulse"></div>
        </div>
      ))}
    </div>
  );
};

export default SimmerEffect;
