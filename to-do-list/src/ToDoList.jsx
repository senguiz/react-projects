import React,{useState} from "react";

function ToDoList(){

    const [task,setTask] = useState([]);

    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t,newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTask = task.filter((_,i) => i!=index);
        setTask(updatedTask);
    }
    function moveTaskUp(index){
        if(index > 0){
        const updatedTask = [...task];
        [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]]
            setTask(updatedTask);
        }
    }
    function moveTaskDown(index){
        if(index < task.length - 1 ){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index+1]] = [updatedTask[index+1], updatedTask[index]]
                setTask(updatedTask);
            }
    }



    return(<div className="to-do-list">
        <h1>To-Do-List</h1>
        <input type = "text"  
        placeholder = "Enter a task..." 
        value={newTask}
        onChange={handleInputChange}/>
        <button className="add-button" onClick={addTask}>Add</button>
        <ol>
            {task.map((task,index) => 
            <li key={index}>
                <span className="text">{task}</span>
                <button className="delete-task" onClick={() => deleteTask(index)}>Delete</button>
                <button className="move-up" onClick={() => moveTaskUp(index)}>Up</button>
                <button className="move-down" onClick={() => moveTaskDown(index)}>Down</button>
                </li>)}
        </ol>
    
    
    
    </div>);
}
export default ToDoList