import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {screen} from '@testing-library/dom'
import {MoviesMocking} from '../movies-mocking'
import {fetchMovies as mockFecthMovies} from '../service/api'
jest.mock('../service/api')

test('movies api loading', async () => {
  const loadingMessage = 'fetching movies ...'
  const {debug, getByLabelText, getByText} = render(<MoviesMocking />)
  await waitFor(() => expect(getByText(loadingMessage)).toBeInTheDocument())
})

test('movies api get', async () => {
  const {debug, getByLabelText, getByText} = render(<MoviesMocking />)

  mockFecthMovies.mockResolvedValueOnce([{title: 'Thor', id: 1}])
  const button = getByText(/get api/i)
  fireEvent.click(button)
  expect(mockFecthMovies).toHaveBeenCalledTimes(1)

  await waitFor(() => expect(screen.getByTestId('1')).toHaveTextContent('Thor'))
})
