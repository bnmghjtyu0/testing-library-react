import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import HiddenMessage from '../hidden-message'

test('show hide message when toggle is clicked', () => {
  const myMessage = 'hello world'
  const {getByText, queryByText, debug} = render(<HiddenMessage />)
  const toggleButton = getByText(/toggle/i)
  //   debug(toggleButton)
  expect(queryByText(myMessage)).not.toBeInTheDocument()
  debug(toggleButton)
})
