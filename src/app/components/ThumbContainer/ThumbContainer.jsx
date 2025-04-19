import React, { useEffect} from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ImageCard from "../ImageCard";
import Macy from "macy";
import HomeScreenLoader from "../ScreenLoader";

const ThumbBox = ({
  thumImages,
  // fetchThumbImages,
  // query,
  // setQuery,
  // setThumbImages,
}) => {
  useEffect(() => {
    var macyInstance = Macy({
      container: document.getElementById("box"),
      columns: 6,
      margin: {
        x: 5,
        y: 10,
      },
      breakAt: {
        1500: 3,
        1200: 4,
        1050: 3,
        750: 2,
        500: 1,
      },
    });
    macyInstance.recalculate();
  });

  function truncateTo100Words(text) {
    const words = text.trim().split(/\s+/);
    if (words.length <= 100) return text;
    return words.slice(0, 100).join(" ") + "...";
  }
  
  return (
    <div className="my-10 w-[90%] mx-auto ">
      <div className="flex justify-between w-full text-gray-700">
      <h1 className="text-left font-bold text-3xl tracking-wide">Tasty Food Recipes</h1>
      <select>
        <option>
          Category
        </option>
        <option value="Desert">Desert</option>
        <option value="Vegeterian">Vegeterian</option>
      </select>
      </div>
      {/* <InfiniteScroll
        dataLength={thumImages.length}
        hasMore={true}
        next={fetchThumbImages}
        loader={<HomeScreenLoader />}
      > */}
        <div className=" m-2 " id="box">
          {thumImages.map((item, i) => {
            {console.log("recieved",item)}

            return item.map((item,j)=>{

              return (
                <ImageCard
                  key={item.strMeal+i+j}
                  img={item.strMealThumb}
                  user={item.strMealThumb}
                  name={item.strMeal}
                  // like={item.likes}
                  desc={item.strArea}
                  ingredients={item.strIngredient1}
                  recipe={truncateTo100Words(item.strInstructions)}
                />
              );
            })
           
          })}
        </div>
      {/* </InfiniteScroll> */}
    </div>
  );
};

export default ThumbBox;
