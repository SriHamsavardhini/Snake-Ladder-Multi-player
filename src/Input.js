import React, {  useState } from "react";
import  Username from './Inputname'


let playerCount;
let userDetails;
let emoji;
let options = ["🥰", "😍", "🤑", "😇", "@", "#", "$", "&"];
export default function Userinput() {
const [count, setCount] = useState();
const [start, setStart] = useState(false);
  function Countfromuser() {
    let userData = {};
    let userEmoji={}
    if (count <= 8) {
      playerCount = Number(count);
      for (let i = 1; i <= playerCount; i++) {
        userData[`P${i}`]=0
        userEmoji[`P${i}Emoji`]= options[i-1]
        setStart(true);
      }
      console.log('count',playerCount)
    }
    userDetails = userData;
    emoji=userEmoji
  }


  return (
    <div>
      <h1>Enter number of players</h1>
      <input
        type="number"
        value={count}
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
       <button onClick={Countfromuser}>submit</button>
      {setStart ? <Username/> : null}
      
    </div>
  );
}

export{userDetails,playerCount,emoji}