import React from "react";

import { RxDoubleArrowLeft } from "react-icons/rx";
import { TbBrandWindows } from "react-icons/tb";
import { MdKeyboardArrowRight } from "react-icons/md";
import SearchField from "../HomePage/SearchField";
import ToggleButton from "../ToggleButton";
const MobileViews = (props) => {
  return (
    <div
      className={` lg:hidden w-full sm:w-max    h-full ${
        document.body.classList.contains("dark") ? "bg-black" : "bg-gray-300"
      } text-left py-10 px-10  absolute top-0 ${
        props.controlSideBar
      }  z-50 transition-all ease-in-out duration-1000 `}
    >
      <div className="w-4/5 mx-auto sm:mx-0 lg:mx-auto text-left grid gap-y-5 ">
        <div className="flex lg:gap-x-4 lg:justify-start justify-between">
          <h1 className="text-gray-500 font-semibold text-left ">FoodieHub</h1>
          <RxDoubleArrowLeft
            onClick={() => props.setControlSideBar("-left-[200%]")}
            className="cursor-pointer lg:hidden my-auto text-3xl font-bold text-gray-500"
          />
        </div>
        <SearchField
          side
          setQuery={props.setQuery}
          setThumbImages={props.setThumbImages}
        />

        <div className=" flex  p-2 rounded-md justify-between text-gray-500 bg-gray-600">
          <div className="flex justify-start gap-x-4">
            <TbBrandWindows className="my-auto text-2xl" />
            <p className="self-center">Home</p>
          </div>
          <MdKeyboardArrowRight className="my-auto text-xl text-gray-500" />
        </div>
        <div className="flex  justify-between text-gray-500">
          <div className="flex justify-start gap-x-4">
            <TbBrandWindows className="my-auto text-2xl" />
            <p className="self-center">Explore</p>
          </div>
          <MdKeyboardArrowRight className="my-auto text-xl text-gray-500" />
        </div>
        <div className="flex  justify-between text-gray-500">
          <div className="flex justify-start gap-x-4">
            <TbBrandWindows className="my-auto text-2xl" />
            <p className="self-center">Connection</p>
          </div>
          <MdKeyboardArrowRight className="my-auto text-xl text-gray-500" />
        </div>
        <div className="flex  justify-between text-gray-500">
          <div className="flex justify-start gap-x-4">
            <TbBrandWindows className="my-auto text-2xl" />
            <p className="self-center">Community</p>
          </div>
          <MdKeyboardArrowRight className="my-auto text-xl text-gray-500" />
        </div>
        <div
          className="flex  justify-between text-gray-500"
          onClick={() => props.setControlSideBar("-left-[200%]")}
        >
          <ToggleButton />
          <MdKeyboardArrowRight className="my-auto text-xl text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default MobileViews;
