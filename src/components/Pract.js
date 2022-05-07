import React from 'react'
import img1 from './Images/Troll Face.png'
import ing2 from './Images/memeimg.png'
import Star from './Star'
export default function Pract() {
    const [contact , setContact] = React.useState({
        fname : 'Ankush' ,
        lname : 'Ladani' , 
        isFavourite : true
    })
    function toggleFavourite(){
        setContact(prevContact => ({
            ...prevContact , 
            isFavourite : !prevContact.isFavourite
        }))
    }
    // let isFilled = contact.isFavourite ? true : false
  return (
    <div>
        <Star  isFilled = {contact.isFavourite} handleClick = {toggleFavourite} ></Star>
    </div>
  )
}
