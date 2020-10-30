import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import HiddenMessage from '../hidden-message'

jest.mock('react-transition-group', () => {
  return {
    CSSTransition: (props) => (props.in ? props.children : null),
  }
})

test('show hide message when toggle is clicked', async () => {
  const myMessage = `I'm a fade Transition!`
  const {getByText, queryByText, debug} = render(<HiddenMessage />)
  const toggleButton = getByText(/toggle/i)
  //   debug(toggleButton)
  expect(queryByText(myMessage)).not.toBeInTheDocument()
  fireEvent.click(toggleButton)
  expect(queryByText(myMessage)).toBeInTheDocument()
  fireEvent.click(toggleButton)
  expect(queryByText(myMessage)).not.toBeInTheDocument()
  // 因為有用到 `react-transition-group`，所以這裡需要用 mock `jest.mock('react-transition-group'` ， 不能用 await 
  // await waitFor(() => expect(queryByText(myMessage)).not.toBeInTheDocument())
})
