import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react'
import {GreetingLoader} from '../greeting-mocking'
import {loadGreeting as mockLoadGreeting} from '../service/api'

jest.mock('../service/api')

test('loads greetings on click', async () => {
  const {debug, getByLabelText, getByText} = render(<GreetingLoader />)
  mockLoadGreeting.mockResolvedValueOnce({data: {greeting: 'TEST_GREETING'}})
  const input = getByLabelText(/name/i)
  const button = getByText(/load greeting/i)
  input.value = 'Marry'
  fireEvent.click(button)
  await waitFor(() =>
    expect(getByLabelText(/greeting/i)).toHaveTextContent('TEXT_GREETING'),
  )
})
