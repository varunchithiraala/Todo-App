import {
  ADD_TODO,
  DELETE_ALL,
  REMOVE_TODO,
  UPDATE_CHECKBOX,
  UPDATE_TODO,
  SAVE_TODOS 
} from '../actions'

const getTodoListFromLocalStorage = () => {
  let stringifiedTodoList = localStorage.getItem('todos')
  let parsedTodoList = JSON.parse(stringifiedTodoList)
  if (parsedTodoList === null) {
    return []
  } else {
    return parsedTodoList
  }
}

let initialState = {
  todos: getTodoListFromLocalStorage(),
  lastSaved: [],
}

export const operationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload] 
      }
    case DELETE_ALL:
      return {
        ...state,
        todos: [] 
      }
    case REMOVE_TODO:
      const filteredTodos = state.todos.filter((todo) => 
        todo.id !== action.payload)
      return {
        ...state,
        todos: filteredTodos 
      }
    case UPDATE_TODO:
      const updatedTodos = state.todos.map((item) => 
        (item.id === action.payload.id ? action.payload : item))
      return {
        ...state,
        todos: updatedTodos
      }
    case UPDATE_CHECKBOX:
      const toggledTodos = state.todos.map((item) => 
        (item.id === action.payload ? { ...item, completed: !item.completed } : item))
      return {
        ...state,
        todos: toggledTodos
      }
    case SAVE_TODOS:
      localStorage.setItem('todos', JSON.stringify(state.todos))
      return {
        ...state,
        lastSaved: [...state.todos]
      }
    default:
      return state
  }
}
