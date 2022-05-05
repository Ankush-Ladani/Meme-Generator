import React from "react";
import img from '../Images/memeimg.png'
export default function Main() {
  return (
    <div className="mainDiv">
      <div className="inputDiv">
        <input type="text" placeholder="Type your Top Text" />
        <input type="text" placeholder="Type your Bottom Text" />
      </div>
      <button type="submit" className="submitBtn">Get a new meme image 🖼</button>
      <img src={img} alt="" />
    </div>
  );
}
