import React from 'react'
import ReactDOM from 'react-dom'
import {queries, getQueriesForElement} from '@testing-library/dom'
import {FavoriteNumber} from '../../favorite-number'

test('renders a number input with a label "Favorite Number"', () => {
  const dom = document.createElement('div')
  ReactDOM.render(<FavoriteNumber />, dom)

  // 寫法一
  // expect(dom.querySelector('input').type).toBe('number')
  // expect(dom.querySelector('label')).toHaveTextContent('Favorite Number')

  // 檢查 label 有沒有 htmlFor=""
  // Here's the text for the label we want to find.
  // -----------------------------------------------------
  // 寫法二
  // const input = queries.getByLabelText(dom, 'Favorite Number')
  // console.log(input)
  // expect(input).toHaveAttribute('type', 'number')

  // 寫法三
  // getByLabelText is prebound to that dom so we can pass our text match regex here and get the input
  const {getByLabelText} = getQueriesForElement(dom) //遍例所有 dom
  const input = getByLabelText(/favorite number/i) //找 label
  expect(input).toHaveAttribute('type', 'number') //驗證 type whether equal number
})
