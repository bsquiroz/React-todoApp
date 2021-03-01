import React, { useState, useEffect } from 'react'

const TodoForm = ({ setTodos, todos, todoEdit, todoUpdate }) => {

  const [successMessage, setSuccessMessage] = useState(false);
  const [formTitle, setFormTitle] = useState("")
  const [formDescription, setFormDescription] = useState("")

  useEffect(() => {
    
    if(todoEdit){
      const { title, description } = todoEdit;
      setFormTitle(title)
      setFormDescription(description)
    }
  }, [todoEdit, ])

  const handleForm = (e) => {
    e.preventDefault()
    const title = e.target.a.value
    const description = e.target.b.value

    if(todoEdit){
      todoUpdate(  
          {
            id:todoEdit.id,
            title,
            description,
            completed:todoEdit.completed
          },
      )
    }else {
      setTodos(
        [
          {
            id:Date.now(),
            title,
            description,
            completed:false
          },
          ...todos,
        ]
      )
    }


    e.target.reset()

    setSuccessMessage(true)

    setTimeout(()=> {
      setSuccessMessage(false)
    }, 2000)
  }

  return (
    <div>
      <h1>{todoEdit ? "Editar tarea": "Agregar nueva tarea"}</h1>
      <form
        onSubmit={handleForm}
      >
        <input 
          type="text" 
          placeholder="Titulo" 
          className="form-control"
          name="a"
          required
          defaultValue={formTitle}
        />

        <textarea 
          className="form-control mt-2" 
          placeholder="Descripción"
          name="b"
          required
          defaultValue={formDescription}
        ></textarea>
      
        <button 
          className="btn btn-primary btn-block mt-2 "
        >{todoEdit ? "Editar tarea ": "Agregar tarea"}</button>
      </form>
      {successMessage && 
        <div className="alert alert-success mt-2">
          <p>Ejecutado con éxito</p>
        </div>
      }
    </div>
  )
}

export default TodoForm
