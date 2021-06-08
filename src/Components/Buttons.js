import { useState } from "react";
import { Bold } from "../styles";

const Buttons = (props) => {

let bold = {name:"Bold"}
const changeStyle=()=>{
    props.setButton(bold.name)
}
  
return (
       
        
        <p>
      <button type="button" className="btn btn-default" onClick={changeStyle}>Bold</button>
      <button type="button" className="btn btn-default" >Italic</button>
      <button type="button" className="btn btn-default" >Underline</button>
      </p>
      
          
    )
}
export default Buttons
