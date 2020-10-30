import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement,
)

// 參考 Kent C. Dodds
/*
  https://codesandbox.io/s/0xp2rpljkn?file=/src/component-did-catch.js
*/
