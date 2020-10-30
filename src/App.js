import React from 'react'
import {FavoriteNumber} from './favorite-number'
import Form from './Form'
import {GreetingLoader} from './greeting-mocking'
import HiddenMessage from './hidden-message'
export default function App() {
  return (
    <div className="App">
      <FavoriteNumber />
      <Form />
      <GreetingLoader />
      <HiddenMessage />
    </div>
  )
}
