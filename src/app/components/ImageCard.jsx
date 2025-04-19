import React, { useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import ImagePopup from "./ImagePopup";

const ImageCard = (props) => {
  const [showPopUp, setShowPopUp] = useState(false);

  return (
    <>
      {/* Popup on image click */}
      <ImagePopup
        showPopUp={showPopUp}
        setShowPopUp={setShowPopUp}
        setThumbImages={props.setThumbImages}
        {...props}
      />

      <div
        onClick={(e) => [e.stopPropagation(), setShowPopUp(!showPopUp)]}
        className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:z-10"
      >
        <img
          src={props.img}
          className="w-full h-52 object-cover"
          alt={props.name}
        />
        <div className="p-3 text-gray-700">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                className="h-9 w-9 rounded-full border-2 border-white object-cover"
                src={props.user}
                alt="user"
              />
              <div className="text-left">
                <p className="font-semibold text-sm md:text-base">{props.name}</p>
                <small className="text-gray-400">{props.desc}</small>
              </div>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <FiThumbsUp className="text-base" />
              {/* <small>{props.like}</small> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
