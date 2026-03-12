import { useState } from "react";

function TodoInput({ onSubmit }) {
    const [inputValue, setInputValue] = useState("");

    function handleAddTask(e){
        e.preventDefault();
        onSubmit?.(inputValue);
        setInputValue("");
        if(inputValue) console.log(inputValue);
    }

    return (
        <>
            <form action="" onSubmit={handleAddTask}>
            <input
                type="text"
                placeholder="Add a new task"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}>
            </input>

            <button onClick={handleAddTask}>Add Task</button>
            </form>
        </>
    );
}

export default TodoInput