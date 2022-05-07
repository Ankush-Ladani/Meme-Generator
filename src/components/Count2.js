import React from 'react'
import Count from './Count';

export default function Count2() {
    const [count , setCount] = React.useState(0);
    // console.log('Count Renedered');
    function Increment(){
        setCount(prevCount => prevCount + 1);
    }
    function Decrement(){
        setCount(prevCount => prevCount - 1)
    }
  return (
    <div>
        {/* <h1> {count} </h1> */}
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
        <Count number = {count} ></Count>
    </div>
  )
}
