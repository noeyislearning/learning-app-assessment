import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

const BookList = ({ books, updateBookStatus, actions }) => (
  <ul className="todo-list">
    {books.map(book =>
      <BookItem key={book.id} book={book} updateBookStatus={updateBookStatus} {...actions} />
    )}
  </ul>
)

BookList.propTypes = {
  actions: PropTypes.object.isRequired
}

export default BookList
