import * as types from '../constants/ActionTypes'
import * as actions from './index'

describe('todo actions', () => {
  it('addBook should create ADD_TODO action', () => {
    expect(actions.addBook('Use Redux')).toEqual({
      type: types.ADD_TODO,
      text: 'Use Redux'
    })
  })

  it('deleteBook should create DELETE_TODO action', () => {
    expect(actions.deleteBook(1)).toEqual({
      type: types.DELETE_TODO,
      id: 1
    })
  })

  it('editBook should create EDIT_TODO action', () => {
    expect(actions.editBook(1, 'Use Redux everywhere')).toEqual({
      type: types.EDIT_TODO,
      id: 1,
      text: 'Use Redux everywhere'
    })
  })

  it('completeBook should create COMPLETE_TODO action', () => {
    expect(actions.completeBook(1)).toEqual({
      type: types.COMPLETE_TODO,
      id: 1
    })
  })

  it('completeAll should create COMPLETE_ALL action', () => {
    expect(actions.completeAllBooks()).toEqual({
      type: types.COMPLETE_ALL_TODOS
    })
  })

  it('clearCompleted should create CLEAR_COMPLETED action', () => {
    expect(actions.clearCompleted()).toEqual({
      type: types.CLEAR_COMPLETED
    })
  })
})
