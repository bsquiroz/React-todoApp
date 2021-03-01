import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, todoDelete, todoToogleCompleted, setTodoEdit}) => {
  return (
    <>  
      {
        todos.map(e => (
          <Todo 
            key = {e.id} 
            todo = {e} 
            todoDelete = {todoDelete}
            todoToogleCompleted = {todoToogleCompleted}
            setTodoEdit = {setTodoEdit}
          />
        ))
      }
    </>
  )
}

export default TodoList
