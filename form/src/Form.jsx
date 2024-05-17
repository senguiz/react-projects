import React,{useState} from "react";

function Form(){

    const [persons, setPersons] = useState([]);
    const [person, setPerson] = useState({
        name:"",
        surname:"",
        age:"",
    });
  
    function handleInputChange(e) {
        const { name, value } = e.target;
        setPerson((prevPerson) => ({
          ...prevPerson,
          [name]: value,
        }));
      }
    function submit(e){
        e.preventDefault();
      if(person.name.trim() !== "" && person.surname.trim() !== "" && person.age.trim() !== "") {
        setPersons((p) => [...p, person]);
    }
    setPerson({ name:"",
                surname:"",
                age:"",});
}
    function reset(){
        setPersons(persons => []);
        window.location.reload();
        
        }

    return (
      <div className="form-container">
        <h1>Form</h1>
        <form className="form" onSubmit={submit}>
        <label className="name">
          Name : <input type="text" name="name" value={person.name} placeholder="Enter your name" onChange={handleInputChange}></input>
        </label>
        <label className="surname">
            Surname : <input type="text"  name="surname" value={person.surname} placeholder="Enter your surname" onChange={handleInputChange}></input>
        </label>
        <label className="age">
            Age : <input type="text" name="age" value={person.age} placeholder="Enter your age" onChange={handleInputChange}></input>
        </label>
          
        <button className="submit-button" type ="submit">Submit</button>
        <button className="reset-button" type ="reset" onClick={reset}>Reset</button>
        </form>
        
        <ol>
        {persons.map((p, index) => (
          <li key={index}>
            <span>Name: {p.name}</span>
            <br></br>
            <span>Surname: {p.surname}</span>
            <br></br>
            <span>Age: {p.age}</span>
            
          </li>
        ))}
      </ol>
        
  
      </div>
    )
}

export default Form
