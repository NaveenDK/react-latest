import {useState} from "react"
function useCounter(){
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    // return whatever we want another component to have access to (count, increment)
    return [count, increment]

}

export default useCounter;