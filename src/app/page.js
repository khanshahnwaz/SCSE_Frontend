'use client'
import "./globals.css";

import Header from "./components/Header/Header";
import SearchBox from "./components/HomePage/MessageBox";
import ThumbBox from "./components/ThumbContainer/ThumbContainer";
import { useState, useEffect } from "react";
import HomeScreenLoader from "./components/ScreenLoader";

import dummy from "./components/data.json"
function App() {
  const [thumImages, setThumbImages] = useState([]);
  const [image, setImage] = useState("");
  const [apiErrorMessage, setApiErrorMessage] = useState(
    "Loading some awesome images..."
  );
  const [flagBg, setFlagBg] = useState(false);
  const [flagThumb, setFlagThumb] = useState(false);
  const [query, setQuery] = useState("");

  const client_id='U-PfZ-YH4ho_Lb4E9PlyCxqCCtnFe2Jdjb-rsiEUAoU'
  console.log("Client id",process.env.REACT_APP_ACCESS_KEY)

  // function to fetch random thumbimages
  const fetchThumbImages = async () => {
  

    // sometimes random api causes error because of limited api calls per hour
    // if json.parse error found, comment out the first api and uncomment second
    // next set the thumbimages with response.results

    https://www.themealdb.com/api/json/v1/1/search.php?f=a

    // https://api.unsplash.com/photos/random/?client_id=${client_id}&count=20&query=food
    try {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
      );
      // const data=await fetch(`https://api.unsplash.com/search/photos/?client_id=${process.env.REACT_APP_ACCESS_KEY}&count=1&query=mountain`)
     
      const response = await data.json();
      
      console.log("Api response",response)


      setFlagThumb(true);
      console.log("response page",dummy.meals);
      // setThumbImages([...thumImages, response.meals]);
      setThumbImages([...thumImages,dummy.meals])
      
    } catch (e) {
      setApiErrorMessage(`${e}`);
      return null;
    }
    console.log("images",thumImages)

    // setThumbImages(response)
  };

  // get image for message box
  const fetchImage=async()=> {
    try{
    const bgImage = await fetch(
      `https://api.unsplash.com/search/photos/?client_id=${client_id}&query=food&count=1`
    );
    const response = await bgImage.json();
    setFlagBg(true);
    // console.log(response);
    setImage(response.results[2].urls.full);
  } catch (e) {
    setApiErrorMessage(`${e}`);
    return null;
  }
  }
  useEffect(() => {
    fetchThumbImages();
    fetchImage();
    // console.log("hello running",count1+=1)
  },[]);
  return (
    <div className="App">
      <Header setThumbImages={setThumbImages} setQuery={setQuery} />
      {flagBg & flagThumb ? (
        <>
          <SearchBox
            setQuery={setQuery}
            setThumbImages={setThumbImages}
            image={image}
          />
          <ThumbBox
            thumImages={thumImages}
            fetchThumbImages={fetchThumbImages}
            setThumbImages={setThumbImages}
            query={query}
            setQuery={setQuery}
          />
        </>
      ) : (
        <HomeScreenLoader message={apiErrorMessage} />
      )}
    </div>
  );
}

export default App;
