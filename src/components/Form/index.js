import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../redux/todo/actions'
import { BsPlus } from 'react-icons/bs';
import {v4 as uuidv4} from 'uuid'
import './index.css'

const Form = () => {
  // Use dispatch to send actions to the Redux store
  const dispatch = useDispatch()

  // State to manage the new todo input value
  const [todoValue, setTodoValue] = useState('')

  // Handle form submission for adding a new todo
  const handleSubmit = (e) => {
    e.preventDefault()
    let todoObj = {
      id: uuidv4(),
      todo: todoValue,
      completed: false,
    }
    setTodoValue('')  // Clear input field after submission
    dispatch(addTodo(todoObj))  // Dispatch action to add new todo
  }

  return (
    <form className='form-container' onSubmit={handleSubmit}>
      <label><span className='bold'>Add</span> Todo Items</label>
      <div className='input-and-btn'>
        <input
          type='text'
          className='mr-2 form-control form-input'
          required
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder='Add Todo'
        />
        <button type='submit' className='add-btn'>
          <BsPlus size={18} />ADD
        </button>
      </div>
    </form>
  )
}

export default Form
