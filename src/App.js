import React, { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const initialTodos =[ 
  {
    id:1,
    title: "todo 1",
    description: "descripcion del todo 1",
    completed: true
  },
  {
    id:2,
    title: "todo 2",
    description: "descripcion del todo 2",
    completed: false
  },
  {
    id:3,
    title: "todo 3",
    description: "descripcion del todo 3",
    completed: true
  },
  {
    id:4,
    title: "todo 4",
    description: "descripcion del todo 4",
    completed: false
  }
]

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [todoEdit, setTodoEdit] = useState(null); 

  const todoDelete = (todoId) => {
    const changedTodos = todos.filter(e => e.id !== todoId)
    setTodos(changedTodos)
  }

  const todoToogleCompleted = (todoId) => {
    const changedTodos = todos.map(e => (
      e.id === todoId 
      ? {...e, completed: !e.completed }
      : e
    ))

    setTodos(changedTodos)
  }

  const todoUpdate = (todoEdit) => {
    const changedTodos = todos.map((e) => {
      return (
        e.id === todoEdit.id ? 
        todoEdit
      :
        e
      )
    })
      console.log(changedTodos);
    setTodos(changedTodos);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList 
            todos = {todos} 
            todoDelete = {todoDelete}
            todoToogleCompleted = {todoToogleCompleted}
            setTodoEdit = {setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm 
            setTodos = {setTodos}
            todos = {todos}
            todoEdit = {todoEdit}
            todoUpdate = {todoUpdate}
          />
        </div>
      </div>
    </div>
  )
}

export default App
