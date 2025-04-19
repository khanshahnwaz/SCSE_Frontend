import React, {useState } from "react";
import SearchField from "../HomePage/SearchField";
import MobileViews from "./MobileHeader";
import { MdOutlineMenu} from "react-icons/md";
import ToggleButton from "../ToggleButton";

const Header = ({ setQuery, setThumbImages }) => {
  const [controlSideBar, setControlSideBar] = useState("-left-[200%]"); 
  return (
    <>
      <div className="lg:hidden flex justify-between md:space-x-7 w-full py-3 px-2 ">
        <MdOutlineMenu
          onClick={() => setControlSideBar("left-0")}
          className="cursor-pointer hover:opacity-70 my-auto text-3xl"
        />
        <h1 className=" text-2xl font-bold font-serif">FoodieHub</h1>
      </div>
      <MobileViews
        controlSideBar={controlSideBar}
        setControlSideBar={setControlSideBar}
        setQuery={setQuery}
        setThumbImages={setThumbImages}
      />

      <div
        id="head"
        className={`lg:block hidden w-full text-gray-500 sticky z-20 top-0 transition-colors duration-500 delay-75  `}
      >
        <div
          className={`m-auto w-[95vw] md:w-[80vw]   flex flex-wrap justify-between p-5 `}
        >
          <div className="flex items-center">
            <h1 className=" text-2xl font-bold font-serif">FoodieHub</h1>
          </div>
          <div className="flex justify-around gap-x-5 items-center ">
            <SearchField setThumbImages={setThumbImages} setQuery={setQuery} />
            <div>
              <p className="font-semibold">Explore</p>
            </div>
            <p className="font-semibold">Colllection</p>

            <p className="font-semibold">Community</p>
          </div>

          <ToggleButton />
        </div>
      </div>
    </>
  );
};

export default Header;
