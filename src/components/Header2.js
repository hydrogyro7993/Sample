import React,{useState} from 'react'
import { GiAk47 } from "react-icons/gi";
function Heeder() {
  const [texts,setTexts]=useState([
    {name1:"King"},
    {name1:"Queen"},
    {name1:"Minister"}
  ]);
const[index,setIndex]=useState(0)
  function high(){
    const newindex=(index+1)%texts.length
  setIndex(newindex);
}
    return(
      <div>
        <button onClick={high}>Change</button>
        <span>{texts[index].name1}</span>
        <GiAk47 />
      </div>
  )
    }  
