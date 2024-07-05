import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdUpdate, MdCancel } from "react-icons/md";
import { FaTrash } from 'react-icons/fa'
import { FiEdit } from 'react-icons/fi'
import { removeTodo, updateCheckbox, updateTodo } from '../../redux/todo/actions'
import './index.css'

const TodosList = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.operationsReducer.todos)  // Get todos from the Redux store
  const [editId, setEditId] = useState(null)  // State to manage the id of the todo being edited
  const [editValue, setEditValue] = useState('')  // State to manage the edited value of the todo

  // Handle click on edit button, set the current todo id and value to be edited
  const handleEditClick = (todo) => {
    setEditId(todo.id)
    setEditValue(todo.todo)
  }

  // Handle the update form submission
  const handleUpdate = (event, todo) => {
    event.preventDefault()
    let editedObj = {
      id: todo.id,
      todo: editValue,
      completed: todo.completed,
    }
    dispatch(updateTodo(editedObj));  // Dispatch action to submit the edited todo
    setEditId(null)  // Reset the edit state
    setEditValue('')
  }

  // Handle cancel edit action
  const handleCancel = () => {
    setEditId(null)
    setEditValue('')
  }

  return todos.map((todo) => (
    <div key={todo.id} className='todos-list-container'>
      <input
        type='checkbox'
        className='mt-2 mr-2 checkbox'
        checked={todo.completed}
        onChange={() => dispatch(updateCheckbox(todo.id))}  // Dispatch action to toggle todo completion
      />
      <div className='label-container'>
        <div>
          {editId === todo.id ? (
            // Render the edit form if the current todo is being edited
            <form onSubmit={(e) => handleUpdate(e, todo)}>
              <input
                type='text'
                className='update-text'
                value={editValue}
                onChange={(e) => setEditValue(e.target.value)}
                required
              />
              <button type='submit' className='btn btn-sm'><MdUpdate size={25} /></button>
              <button type='button' className='btn btn-sm' onClick={handleCancel}>
                <MdCancel size={25} />
              </button>
            </form>
          ) : (
            // Render the todo item if it's not being edited
            <p className={todo.completed ? 'line-through' : 'todo'}>
              {todo.todo}
            </p>
          )}
        </div>
        <div className='actions-box'>
          {editId !== todo.id && (
            <>
              <button className='btn btn-sm' onClick={() => handleEditClick(todo)}>
                <FiEdit size={18} />
              </button>
              <button className='btn btn-sm' onClick={() => dispatch(removeTodo(todo.id))}>
                <FaTrash size={18} />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  ))
}

export default TodosList
