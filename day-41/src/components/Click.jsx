import { useState } from "react";

export function Click() {
    const [counter, setCounter] = useState(0);
    function handleClick() {
        setCounter(counter + 1)
    }
    const [inputText, setInputText] = useState("")
    function handleInput(event){
        setInputText(event.target.value);
    }
    return (
        <div>
            {/*Exercise 1*/}
            <p>{counter}</p>
            <button onClick={() => { handleClick() }}>Click me</button> 

            {/*Exercise 2*/}
            <p>{inputText}</p>
            <input value={inputText} onChange={(e) => {handleInput(e)}} />
        </div>
    )
}