import { useState } from "react";


function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    const newColor = (e) =>{
        setColor(e.target.value);
    }

    return(
        <div className="color-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor:color}}>
                <p className="text">Selected Color : {color}</p>
            </div>
            <label>Selected Color:</label>
            <input type = "color" value={color} onChange={newColor}></input>
            <></>
        </div>
    );

}

export default ColorPicker