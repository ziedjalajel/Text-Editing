import Buttons from "./Buttons"
import TextArea from "./TextArea"
import ColorBoxes from "./ColorBoxes"
import { useState } from "react";

const Home = (props) => {
    const [textArea,setTextArea] = useState("")
    const [colorBox,setColorBox] = useState("")
    const [Button,setButton] = useState("")
    const fontColor={color:{yellow:"#fdff00",blue:"#0000ff",red:"#ff0000",black:"#000000",purple:"#800080"}}
    const changeFontYellow=()=>{
        setColorBox(fontColor.color.yellow)
    }
    return (

<div id="container">
    <h1>A Great work by the amazing : Hayder , Zied </h1>
    <div className="row">
     <Buttons/>
    <div>
    <TextArea/>
    </div>
    {/* <ColorBoxes changeFontYellow={changeFontYellow}/> */}
    </div>
    
  </div>
)

}
export default Home