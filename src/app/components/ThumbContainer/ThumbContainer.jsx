import React, { useEffect, useState } from "react";
import ImageCard from "../ImageCard";
import Macy from "macy";

const ThumbBox = ({ thumImages }) => {
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const macyInstance = Macy({
      container: document.getElementById("box"),
      columns: 3, // Reduced columns for clarity
      margin: { x: 20, y: 30 }, // Increased spacing
      breakAt: {
        1500: 3,
        1200: 2,
        750: 1,
      },
    });
    macyInstance.recalculate();
  }, [filteredImages]);

  useEffect(() => {
    const filtered = thumImages
      .flat()
      .filter((item) =>
        selectedCategory === "All" ? true : item.strArea === selectedCategory
      );
    setFilteredImages(filtered);
  }, [selectedCategory, thumImages]);

  function truncateTo100Words(text) {
    const words = text.trim().split(/\s+/);
    if (words.length <= 100) return text;
    return words.slice(0, 100).join(" ") + "...";
  }

  return (
    <div className="my-10 w-[90%] mx-auto">
      {/* Header & Filter */}
      <div className="flex justify-between items-center w-full text-gray-700 mb-8">
        <h1 className="text-left font-bold text-3xl tracking-wide">
          Tasty Food Recipes
        </h1>
        <select
          className="border border-gray-300 px-3 py-2 rounded-md shadow-sm"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Malaysian">Malaysian</option>
          <option value="British">British</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Grid */}
      <div className="m-2 gap-6" id="box">
        {filteredImages.map((item, index) => (
          <ImageCard
            key={item.idMeal + index}
            img={item.strMealThumb}
            user={item.strMealThumb}
            name={item.strMeal}
            desc={item.strArea}
            ingredients={item.strIngredient1}
            recipe={truncateTo100Words(item.strInstructions)}
          />
        ))}
      </div>
    </div>
  );
};

export default ThumbBox;
