import TodoListItem from "./TodoListItem";

function TodoList({ listOfTodos, deleteTask }) {
    return(
        <ol type="a">
            {listOfTodos?.map((todo) =>{
                // return <li key={todo.id}> {todo.title} - {todo.id} - {todo.completed ? "Completed" : "Not Completed"}</li>
                return <TodoListItem key={todo.id} todo={todo} deleteTask={deleteTask} />
            })}
        </ol>
    )
}

export default TodoList;