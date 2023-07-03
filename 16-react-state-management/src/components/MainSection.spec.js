import React from 'react'
import { createRenderer } from 'react-test-renderer/shallow';
import MainSection from './MainSection'
import Footer from './Footer'
import VisibleBookList from '../containers/VisibleBookList'

const setup = propOverrides => {
  const props = Object.assign({
    todosCount: 2,
    completedCount: 1,
    actions: {
      editBook: jest.fn(),
      deleteBook: jest.fn(),
      completeBook: jest.fn(),
      completeAllBooks: jest.fn(),
      clearCompleted: jest.fn()
    }
  }, propOverrides)

  const renderer = createRenderer()
  renderer.render(<MainSection {...props} />)
  const output = renderer.getRenderOutput()

  return {
    props: props,
    output: output,
    renderer: renderer
  }
}

describe('components', () => {
  describe('MainSection', () => {
    it('should render container', () => {
      const { output } = setup()
      expect(output.type).toBe('section')
      expect(output.props.className).toBe('main')
    })

    describe('toggle all input', () => {
      it('should render', () => {
        const { output } = setup()
        const [ toggle ] = output.props.children[0].props.children
        expect(toggle.type).toBe('input')
        expect(toggle.props.className).toBe('toggle-all')
        expect(toggle.props.type).toBe('checkbox')
        expect(toggle.props.checked).toBe(false)
      })

      it('should be checked if all todos completed', () => {
        const { output } = setup({
          completedCount: 2
        })
        const [ toggle ] = output.props.children[0].props.children
        expect(toggle.props.checked).toBe(true)
      })

      it('should call completeAllBooks on change', () => {
        const { output, props } = setup()
        const [ , label ] = output.props.children[0].props.children
        label.props.onClick({})
        expect(props.actions.completeAllBooks).toBeCalled()
      })
    })

    describe('footer', () => {
      it('should render', () => {
        const { output } = setup()
        const [ , , footer ] = output.props.children
        expect(footer.type).toBe(Footer)
        expect(footer.props.completedCount).toBe(1)
        expect(footer.props.activeCount).toBe(1)
      })

      it('onClearCompleted should call clearCompleted', () => {
        const { output, props } = setup()
        const [ , , footer ] = output.props.children
        footer.props.onClearCompleted()
        expect(props.actions.clearCompleted).toBeCalled()
      })
    })

    describe('visible todo list', () => {
      it('should render', () => {
        const { output } = setup()
        const [ , visibleBookList ] = output.props.children
        expect(visibleBookList.type).toBe(VisibleBookList)
      })
    })

    describe('toggle all input and footer', () => {
      it('should not render if there are no todos', () => {
        const { output } = setup({
          todosCount: 0,
          completedCount: 0
        })
        const renderedChildren = output.props.children
        .filter((item) => item !== false)
        expect(renderedChildren.length).toBe(1)
        expect(renderedChildren[0].type).toBe(VisibleBookList)
      })
    })
  })
})
