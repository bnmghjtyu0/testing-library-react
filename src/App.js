import React from 'react'
import {FavoriteNumber} from './favorite-number'
import Form from './Form'
import {GreetingLoader} from './greeting-mocking'
import TodoList from './TodoList'
export default function App() {
  return (
    <div className="App">
      <FavoriteNumber />
      <Form />
      <GreetingLoader />
      <TodoList />
    </div>
  )
}
