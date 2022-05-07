import React from "react";
import img from "../newTry/Images/Troll Face.png";
export default function Header() {
  return (
    <div className="header">
      <img src={img} alt="" />
      <h1>Meme Generator</h1>

      <p className="headerpara">React Course - Project 3</p>
    </div>
  );
}
