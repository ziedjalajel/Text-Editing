import { useState } from "react";
import { Title } from "../styles";
const TextArea = (props) => {
    const colors = ["yellow","blue","red","black","purple"]
    return (
    <textarea rows="3" cols="40" name="hayder" id="hayder">
        <Title>
            test-text
            
        </Title>
    </textarea>

    )
}
export default TextArea