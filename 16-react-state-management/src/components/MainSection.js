import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Footer from './Footer'
import VisibleBookList from '../containers/VisibleBookList'
import {BookProvider} from '../context/BookContext';

import classicBooks from '../constants/books'


class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAuthors: true,
    };
    this.updateBookStatus = this.updateBookStatus.bind(this);
    this.updateBookStatusRedux = this.updateBookStatusRedux.bind(this);
  }

  componentWillMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:jane%20austen")
    .then(response => response.json())
    .then(myData => this.setState({books: myData.items}))
  }

  updateBookStatus(bookId, status) {
    let newBooks = this.state.books;
    const book = newBooks.find(book => book.id === bookId)
    book.status = status;
    this.setState({
      books: newBooks,
      completedBooks: status === 'completed' ? 
        this.state.completedBooks + 1 : 
        this.state.completedBooks - 1,
    })
  }

  updateBookStatusRedux(bookId) {
    this.props.actions.updateBookStatus(bookId)
  }

  render() {
    return (
      <BookProvider value={{showAuthors: this.state.showAuthors}}>
        <section className="main">
        <Footer  
            completedCount={this.props.completedBooks}
            activeCount={this.props.books.length - this.props.completedBooks}
            onClearCompleted={this.props.actions.clearCompleted}
          />
        <button onClick={() => this.setState({showAuthors: !this.state.showAuthors})} style={{textSize: '14px', margin: '5px', color: 'blue'}}> Toggle authors </button>
          <VisibleBookList books={this.props.books} updateBookStatus={this.updateBookStatus} />
        </section>
      </BookProvider>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired
}

export default MainSection;





  /*
    "https://www.googleapis.com/books/v1/volumes?q=inauthor:jane%20austen"
  */