import { combineReducers } from 'redux'
import books from './books'
import visibilityFilter from './visibilityFilter'

const rootReducer = combineReducers({
  books,
  visibilityFilter
})

export default rootReducer
