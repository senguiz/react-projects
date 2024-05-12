import React ,{ useState } from "react";
function MyComponent(){

    const [car,setCar] = useState({ year:2024,
                                    make:"Ford",
                                    model:"Mustang"});

    function handleYearChange(e){
        setCar(c => ({...c, year: e.target.value}));
        }
     function handleMakeChange(e){
        setCar(c => ({...c, make: e.target.value}));
        }
    function handleModelChange(e){
        setCar(c => ({...car, model: e.target.value}));
        }
    return(<div>
    
    <p>Your favourite car is : {car.year} {car.make} {car.model}</p>
    <input type="number" value={car.year} onChange={handleYearChange}></input><br/>
    <input type="text" value={car.make} onChange={handleMakeChange}></input><br/>
    <input type="text" value={car.model} onChange={handleModelChange}></input><br/>
    
    </div>);
}
export default MyComponent