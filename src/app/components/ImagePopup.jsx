import React, { useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import keywords from "./keyword";

const ImagePopup = (props) => {
  useEffect(() => {
    document.addEventListener("mouseup", function (e) {
      const container = document.getElementById("container");
      if (container && !container.contains(e.target)) {
        props.setShowPopUp(false);
      }
    });
  }, [props]);

  const handleRelatedTags = async (value) => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=1&query=${value}`
    );
    const result = await data.json();
    props.setThumbImages(result.results);
    props.setQuery(value);
  };

  if (!props.showPopUp) return null;

  return (
    <>
      {/* ✨ Overlay with blur and dark tint */}
      <div className="fixed z-30 w-screen h-screen inset-0 bg-black/60 backdrop-blur-md transition-all duration-300 ease-in-out"></div>

      {/* Popup Container */}
      <div
        id="container"
        className="fixed top-1/2 left-1/2 z-40 transform -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-[85vw] md:w-[75vw] lg:w-[65vw] xl:w-[60vw] max-h-[90vh] overflow-y-auto rounded-2xl p-5 bg-white  shadow-2xl backdrop-blur-xl transition-all duration-300 ease-in-out"
      >
        {/* Close Button */}
        <RxCross2
          className="absolute top-4 right-4 text-3xl text-gray-600 hover:text-red-500 cursor-pointer transition-all duration-200"
          onClick={() => props.setShowPopUp(false)}
        />

        {/* Image */}
        <img
          alt="popup"
          src={props.img}
          className="rounded-xl w-full h-[40vh] md:h-[50vh] object-cover mb-4"
        />

        {/* Author & Description */}
        <div className="flex flex-col md:flex-row justify-between gap-4 px-2 mb-4 text-gray-800 ">
          <div>
            <p className="text-lg font-semibold">{props.name}</p>
            <p className="text-sm italic">{props.desc}</p>
          </div>
          <div className="text-sm">
            <p>{props.recipe}</p>
          </div>
        </div>

        {/* Ingredients */}
        <div className="px-2 mb-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-700 ">
            Ingredients
          </h3>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            {props.ingredients &&
              props.ingredients.split(",").map((item, index) => (
                <li key={index}>{item.trim()}</li>
              ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ImagePopup;
