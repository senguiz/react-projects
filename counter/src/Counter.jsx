import { useState } from "react"

function Counter(){

    const [count, setCount] = useState(0);

    const inc = () => {
        setCount(count + 1);
    }
    const res = () => {
        setCount(0);
    }
    const dec = () =>{
        setCount(count - 1);
    }

    return(
        <div className="counter-container">

        <p className="counter-display">{count}</p>
        <button className="counter-button" onClick={dec}>Decrement</button>
        <button className="counter-button" onClick={res}>Reset</button>
        <button className="counter-button" onClick={inc}>Increment</button>

        </div>
    );



}
export default Counter