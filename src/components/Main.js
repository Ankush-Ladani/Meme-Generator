import React from "react";
import img from "../Images/memeimg.png";
import memeData from "./memeData";
export default function Main() {
  function HandleEvent() {
    const memesArray = memeData.data.memes;
    // console.log(memesArray);
    const randomNum = Math.floor(Math.random() + memesArray.length);
    // console.log(randomNum);
    const url = memesArray[randomNum].url
    console.log(url);
  }
  return (
    <div className="mainDiv">
      <div className="inputDiv">
        <input type="text" placeholder="Type your Top Text" />
        <input type="text" placeholder="Type your Bottom Text" />
      </div>
      <button onClick={HandleEvent} className="submitBtn">
        Get a new meme image 🖼
      </button>
      {/* <img className="imgMeme" src={img} alt="" /> */}
    </div>
  );
}
