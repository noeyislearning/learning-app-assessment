import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import BookList from './BookList'
import BookItem from './BookItem'

const setup = () => {
  const props = {
    filteredTodos: [
      {
        text: 'Use Redux',
        completed: false,
        id: 0
      }, {
        text: 'Run the tests',
        completed: true,
        id: 1
      }
    ],
    actions: {
      editBook: jest.fn(),
      deleteBook: jest.fn(),
      completeBook: jest.fn(),
      completeAll: jest.fn(),
      clearCompleted: jest.fn()
    }
  }

  const renderer = createRenderer();
  renderer.render(<BookList {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output
  }
}

describe('components', () => {
  describe('BookList', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('ul')
      expect(output.props.className).toBe('todo-list')
    })

    it('should render todos', () => {
      const { output, props } = setup()
      expect(output.props.children.length).toBe(2)
      output.props.children.forEach((todo, i) => {
        expect(todo.type).toBe(BookItem)
        expect(Number(todo.key)).toBe(props.filteredTodos[i].id)
        expect(todo.props.todo).toBe(props.filteredTodos[i])
      })
    })
  })
})
