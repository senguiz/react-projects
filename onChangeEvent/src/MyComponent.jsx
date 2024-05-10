import React ,{ useState } from "react";

function MyComponent(){


    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [payment, setPayment] = useState("");
    const [comment, setComment] = useState("");
    const [shipping,setShipping] = useState("")

    function handleNameChange(e){
        setName(e.target.value);
    }
    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }
    function handleCommentChange(e){
        setQuantity(e.target.value);
    }
    function handlePaymentChange(e){
        setQuantity(e.target.value);
    }
    function handleShippingChange(e){
        setQuantity(e.target.value);
    }
    return(<div>
        <input type = "text" value={name} onChange={handleNameChange} placeholder="Please Enter Your Name"></input>
        <p>Name:{name}</p>
        <input type = "number" value={quantity} onChange={handleQuantityChange}></input>
        <p>Quantity:{quantity}</p>
        <textarea type="text" value={comment} onChange={handleCommentChange} placeholder="Give instructions"></textarea>
        <p>Comment:{comment}</p>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select payment Method</option>
            <option value="Credit Card"></option>
            <option value="Cash"></option>
            <option value="Gift Card"></option>
        </select>
        <p>Payment:{payment}</p>
        <label>
            <input type="radio" value="Pick Up" checked={shipping==="Pick Up"} onChange={handleShippingChange}></input>
            Pick Up
        </label>
        <label>
            <input type="radio" value="Delivery" checked={shipping==="Delivery"} onChange={handleShippingChange}></input>
            Delivery
        </label>
        <p>Shipping:{shiping}</p>
        <></>

        
    
        </div>
        );
}
export default MyComponent