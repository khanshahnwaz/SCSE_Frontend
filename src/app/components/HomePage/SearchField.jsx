import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import searchKeywords from "../keyword";
const SearchField = ({ setQuery, setThumbImages, side }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (event) => {
    const value = event.target ? event.target.value : event;
    setInputValue(value);
    if (!value) setSuggestions([]);

    // Filter suggestions based on the current input value
    const filteredSuggestions = searchKeywords.filter((keyword) =>
      keyword.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(filteredSuggestions);

    // update images in real time
    setQuery(value);
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`
    );
    const result = await data.json();
    console.log("real time updates", result);
    setThumbImages(result.results.meals);
  };
  return (
    <div className="relative">
      <div
        className={`flex gap-x-2 justify-start shadow-md rounded-md p-3 lg:w-full ${
          side ? "w-full" : "w-4/5"
        } bg-gray-200 mx-auto`}
      >
        <CiSearch className="my-auto text-lg" />
        <input
          type="text"
          className="bg-inherit outline-none w-full text-gray-500"
          placeholder="Search for recipes"
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </div>
      <ul
        className={`text-left   ${
          inputValue && suggestions.length > 0 ? ["bg-white"] : "hidden"
        } font-semibold absolute left-10 p-3 pr-10  z-10 text-gray-500`}
      >
        {suggestions?.map((item, i) => {
          if (i <= 5)
            return (
              <li
                onClick={() => [handleInputChange(item), setSuggestions([])]}
                className="p-1 hover:underline cursor-pointer hover:font-bold"
                key={i}
              >
                {item}
              </li>
            );
        })}
      </ul>
    </div>
  );
};

export default SearchField;
