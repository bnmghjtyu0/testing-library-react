import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import {v4 as uuidv4} from 'uuid'
import './styles.css'

function TodoList() {
  const [inProp, setInProp] = useState(false)
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Buy eggs'},
    {id: uuidv4(), text: 'Pay bills'},
    {id: uuidv4(), text: 'Invite friends over'},
    {id: uuidv4(), text: 'Fix the TV'},
  ])
  return (
    <div>
      <TransitionGroup className="todo-list">
        {items.map(({id, text}) => (
          <CSSTransition timeout={200} classNames="item">
            <div
              style={{
                borderColor: '#333',
                borderWidth: 1,
                borderStyle: 'solid',
                display: 'flex',
                padding: 12,
                marginBottom: 6,
              }}
            >
              <button
                className="remove-btn"
                onClick={() =>
                  setItems((items) => items.filter((item) => item.id !== id))
                }
              >
                &times;
              </button>
              <div>{text}</div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
      <button
        onClick={() => {
          const text = prompt('Enter some text')
          if (text) {
            setItems((items) => [...items, {id: uuidv4(), text}])
          }
        }}
      >
        Add Item
      </button>
    </div>
  )
}

export default TodoList
