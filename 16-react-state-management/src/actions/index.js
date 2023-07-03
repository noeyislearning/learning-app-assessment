import * as types from '../constants/ActionTypes'

export const addBook = text => ({ type: types.ADD_TODO, text })
export const deleteBook = id => ({ type: types.DELETE_TODO, id })
export const editBook = (id, text) => ({ type: types.EDIT_TODO, id, text })
export const completeBook = id => ({ type: types.COMPLETE_TODO, id })
export const completeAllBooks = () => ({ type: types.COMPLETE_ALL_TODOS })
export const clearCompleted = () => ({ type: types.CLEAR_COMPLETED })
export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter})
export const updateBookStatus = id => ({type: types.UPDATE_BOOK, id})