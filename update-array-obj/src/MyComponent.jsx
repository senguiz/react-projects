import React,{ useState } from "react";
function MyComponent(){


    const [cars,setCars] = useState([]);
    const [carYear,setCarYear] = useState(newDate().getFullYear());
    const [carMake,setCarMake] = useState("");
    const [carModel,setCarModel] = useState("");
    function handleAddCar(){
        const newCar = [{year:carYear, 
                         make:carMake, 
                         model:carModel}];
        setCars = (c => [...c, newCar]); 
        
        setCarYear(newDate().getFullYear());
        setCarMake("");
        setCarModel("");
    }
    function handleRemoveCar(index){
        setCars(c => c.filter((_,i) => i !==index));
    }
    function handleYearCar(e){
        setCarYear(e.target.value)
    }
    function handleMakeCar(e){
        setCarYear(e.target.value)
    }
    function handleModelCar(e){
        setCarYear(e.target.value)
    }
    return(<div>
    <h2>List of Car Objects</h2>
    <ul>{cars.map((car, index) =>
            <li key={index}>
                {cars.year}{car.make}{car.model}
            </li>
            )}</ul>
    <input type="number" value = {carYear} onChange={handleYearCar}/>
    <input type="text" value = {carMake} placeholder="Enter car name" onChange={handleMakeCar}/>
    <input type="text" value = {carModel} placeholder="Enter car model" onChange={handleModelCar}/>
    <button onClick={handleAddCar}>Add Car</button>
    
    
    </div>);
}
export default MyComponent