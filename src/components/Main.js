import React from "react";
import img from "../Images/memeimg.png";
import memeData from "./memeData";
export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memeData);
  function getMemeImage() {
    const memesArray = allMemeImages.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url
    setMeme(prevMeme => ({
        ...prevMeme,
        randomImage: url
    }))
    
}

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  }
  return (
    <div className="mainDiv">
      <div className="inputDiv">
        <input
          name="topText"
          onChange={handleChange}
          value={meme.topText}
          type="text"
          placeholder="Type your Top Text"
        />
        <input
          type="text"
          onChange={handleChange}
          name="bottomText"
          value={meme.bottomText}
          placeholder="Type your Bottom Text"
        />
      </div>
      <button onClick={getMemeImage} className="submitBtn">
        Get a new meme image 🖼
      </button>
      <img width="200px" className="imgMeme" src={meme.randomImage} alt="" />
      <h2 className="top">{meme.topText}</h2>
      <h2 className="bottom"> {meme.bottomText} </h2>
    </div>
  );
}
