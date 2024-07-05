import { useDispatch, useSelector } from 'react-redux'
import Form from '../Form'
import TodosList from '../TodosList'
import { deleteAll, saveTodos } from '../../redux/todo/actions'
import './index.css'

const Todos = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state) => state.operationsReducer.todos)  // Get todos from the Redux store

  // Handle the save button click
  const handleSaveTodos = () => {
    dispatch(saveTodos())  // Dispatch action to save todos
  }

  // Handle the delete all button click
  const handleDeleteAll = () => {
    dispatch(deleteAll())  // Dispatch action to delete all todos
  }

  return (
    <div className='todos-container'>
      <h1 className='text-center mt-3 todos-heading'>TODO-APP</h1>
      {/* Rendering form to add new todos */}
      <Form />
      {/* Rendering the list of todos */}
      <TodosList />
      <div className='buttons-container'>
        {todos.length > 0 && (
          <button className='btn btn-danger btn-md mt-3 mr-3 delete-all-btn' onClick={handleDeleteAll}>
            DELETE ALL
          </button>
        )}
        <button className='btn btn-success btn-md mt-3 save-btn' onClick={handleSaveTodos}>
          SAVE
        </button>
        </div>
    </div>
  )
}

export default Todos
