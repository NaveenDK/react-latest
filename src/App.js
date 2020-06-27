import React, {useState} from "react"
import useCounter from "./useCounter"

function App() {   
    const [number,increment]= useCounter()

    return (
        <div>
            <h1>The count is {number}</h1>
            <button onClick={increment}>Add 1</button>
        </div>
    )
}

export default App