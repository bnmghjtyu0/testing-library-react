import React, {useState} from 'react'
import {CSSTransition, Transition} from 'react-transition-group'
import './react-transition.css'

const duration = 300
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
const transitionStyles = {
  entering: {opacity: 1},
  entered: {opacity: 1},
  exiting: {opacity: 0},
  exited: {opacity: 0},
}

const Fade = ({in: inProp}) => (
  <Transition in={inProp} timeout={duration}>
    {(state) => (
      <div
        style={{
          ...defaultStyle,
          ...transitionStyles[state],
        }}
      >
        I'm a fade Transition!
      </div>
    )}
  </Transition>
)

const CSSFade = ({in: inProp}) => (
  <CSSTransition in={inProp} timeout={1000} classNames="fadeR" unmountOnExit>
    <div>I'm a fade Transition!</div>
  </CSSTransition>
)

function HiddenMessage() {
  const [show, setShow] = React.useState(false)
  const toggle = () => setShow((s) => !s)
  return (
    <div>
      <button onClick={toggle}>toggle</button>
      {/* <Fade in={show} /> */}
      <CSSFade in={show} />
    </div>
  )
}

export default HiddenMessage
