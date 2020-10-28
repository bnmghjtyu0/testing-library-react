import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import user from '@testing-library/user-event'
import {FavoriteNumber} from '../../favorite-number'

// import {render} from '@testing-library/react'
// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return {container, ...queries}
// }

// interface render {
//   return {
//     getByLabelText:()=>{},
//     getByRole:()=> //to have text content.
//     rerender: () =>
//   }
// }

test('renders a number input with a label "Favorite Number"', () => {
  const {getByLabelText, debug} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i) //找 label
  // debug(input)
  expect(input).toHaveAttribute('type', 'number') //驗證 type whether equal number
})

test('listening onChange.', () => {
  const {getByLabelText, getByRole, debug} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i) //找 label

  // fireEvent.change(input, {target: {value: 10}})
  // uses fireEvent to fire a whole bunch of events that will typically happen when a user types into an input, like the keydown, the keyup, as well as the change event.
  // import user from '@testing-library/user-event'
  // user.type(input, '10') = fireEvent.change(input, {target: {value: 10}})
  user.type(input, '10')
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
})

test('rerender', () => {
  const {getByLabelText, getByRole, queryByRole, rerender} = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  // user.type(input, '10')
  fireEvent.change(input, {target: {value: 10}})
  expect(getByRole('alert')).toHaveTextContent(/the number is invalid/i)
  rerender(<FavoriteNumber max={10} />)
  expect(queryByRole('alert')).toBeNull()
})
