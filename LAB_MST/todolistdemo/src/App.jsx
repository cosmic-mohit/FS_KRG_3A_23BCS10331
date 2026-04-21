import TodoInput from "./todoinput"
import TodoList from "./TodoList"
import { useState } from "react"
function App() {

  const [todos, setTodos] = useState([])

  function onTodoFormSubmit(newTodo) {
    if (newTodo) {
      setTodos([...todos, { id: crypto.randomUUID(), title: newTodo, completed: false }])
    }
  }

  function deleteTask(id) {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit} />
      <TodoList listOfTodos={todos} deleteTask={deleteTask} />
    </>
  )
}

export default App
