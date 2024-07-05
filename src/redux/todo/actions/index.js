export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const UPDATE_TODO = 'UPDATE_TODO'
export const UPDATE_CHECKBOX = 'UPDATE_CHECKBOX'
export const DELETE_ALL = 'DELETE_ALL'
export const SAVE_TODOS = 'SAVE_TODOS'

export const addTodo = (payload) => ({
    type: ADD_TODO,
    payload
})

export const deleteAll = () => ({
    type: DELETE_ALL
})

export const removeTodo=(payload) => ({
    type: REMOVE_TODO,
    payload
})

export const updateTodo = (payload) => ({
    type: UPDATE_TODO,
    payload
})

export const updateCheckbox = (payload) => ({
    type: UPDATE_CHECKBOX,
    payload
})

export const saveTodos = () => ({
    type: SAVE_TODOS,
})
