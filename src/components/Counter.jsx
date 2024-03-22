import { useState } from "react"
import CounterDisplay from "./CounterDisplay"

function Counter({initialValue=0}){

const [count, setCounter] = useState(initialValue)
function increment(){
    setCounter(c => c + 1)
}
function decrement(){
    setCounter(c => c - 1)
}
function reset(){
    setCounter(0)
}
                                                                                                                                                                               

 return(
    <>
    <CounterDisplay count = {count} />
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
    <button onClick={reset}>Reset</button>

    </>
 )
}

export default Counter