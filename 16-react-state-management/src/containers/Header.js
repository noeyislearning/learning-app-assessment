import { connect } from 'react-redux'
import Header from '../components/Header'
import { addBook } from '../actions'

export default connect(null, { addBook })(Header)
