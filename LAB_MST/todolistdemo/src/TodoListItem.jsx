// using react memo so that even if parent component re-renders, 
// this component will not re-render unless its props change
// and all the todo will not re-render if one todo changes
import { memo } from "react";

function TodoListItem({ todo, deleteTask }) {
    return(<>
        {/* <li>{todo.title} - {todo.id} - {todo.completed ? "Completed" : "Not Completed"}</li> */}
        <li>{todo.title}</li>
        <button onClick={() => deleteTask(todo.id)}>Delete</button>
        </>
    )
}

export default memo(TodoListItem);