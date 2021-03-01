import React from 'react'

const Todo = ({todo, todoDelete, todoToogleCompleted, setTodoEdit}) => {

  return (
    <div>
      <div className="card mt-3">
        <div className="card-body"> 
          <h3 className="card-title text-right">
            {todo.title}
            {todo.completed ?
              <button 
              className="btn btn-sm btn-outline-success"
              onClick={() => todoToogleCompleted(todo.id)}
              >
                Finalizada
              </button>
            :
              <button 
                className="btn btn-sm btn-outline-warning"
                onClick={() => todoToogleCompleted(todo.id)}
              >
                Terminar
              </button>
            }

          </h3>
          <p className="card-text text-rigth">
            {todo.description}
          </p>
          <hr/>
          <div className="d-flex justify-content-end">
            <button 
            className="btn btn-sm btn-outline-primary mr-2"
            onClick={(() => setTodoEdit(todo))}
            >
              Editar
            </button>
            <button 
              className="btn btn-sm btn-outline-danger"
              onClick={() => todoDelete(todo.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo
