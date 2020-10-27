import React from 'react'
import {render, fireEvent} from '@testing-library/react'
import user from '@testing-library/user-event'
import Form from '../Form'

import {axe, toHaveNoViolations} from 'jest-axe'
expect.extend(toHaveNoViolations)

test('the form is accessible', async () => {
  const {container} = render(<Form />)
  // console.log(container.innerHTML)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
