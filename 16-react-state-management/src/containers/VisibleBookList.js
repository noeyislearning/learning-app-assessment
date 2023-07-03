import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TodoActions from '../actions'
import BookList from '../components/BookList'
import { getVisibleBookList } from '../selectors'

const mapStateToProps = state => ({
  filteredTodos: getVisibleBookList(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})


const VisibleBookList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList)

export default VisibleBookList
