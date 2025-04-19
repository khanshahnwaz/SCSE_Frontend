import React from "react";

import SearchField from "./SearchField";
const SearchBox = ({ setThumbImages, setQuery, image }) => {
  return (
    <div>
      <div
        className={`w-full h-[50vh] lg:h-[70vh] bg-cover flex items-center`}
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className="mx-auto grid gap-y-5">
          <div>
            <h1 className=" font-extrabold text-4xl text-center text-white tracking-wide">
              Download High Quality Images by creators{" "}
            </h1>
            <small className="text-white tracking-wide text-2xl ">
              Over 2.4 million food recipes by our talendted community
            </small>
          </div>
          <SearchField setQuery={setQuery} setThumbImages={setThumbImages} />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
