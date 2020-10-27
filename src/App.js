import React from 'react'
import './styles.css'
import {FavoriteNumber} from './favorite-number'
import Form from './Form'
import {GreetingLoader} from './greeting-mocking'
export default function App() {
  return (
    <div className="App">
      <FavoriteNumber />
      <Form />
      <GreetingLoader />
    </div>
  )
}
