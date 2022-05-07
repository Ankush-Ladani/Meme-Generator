import React from "react";
import img from "../newTry/Images/memeimg.png";
import memeData from "./memeData";
export default function Main() {
  const [imgUrl , setImgUrl] = React.useState("https://i.imgflip.com/30b1gx.jpg");
  const [textArea , setTextArea] = React.useState({
      topText : '',
      bottomText : ''
  })
  function HandleEvent() {
      let memesArray = memeData.data.memes
    let randomNum = Math.floor(Math.random() * memesArray.length  )
    // console.log(randomNum);
    // imgUrl = memesArray[randomNum].url
    setImgUrl(memesArray[randomNum].url)
    // console.log(imgUrl);
    // item++;
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
      <img width='200px' src={imgUrl} alt="" />
    </div>
  );
}
