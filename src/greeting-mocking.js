import React from 'react'
import {loadGreeting, fetchMovies} from './service/api'

function GreetingLoader() {
  const [greeting, setGreeting] = React.useState('')
  // const [movies, setMovies] = React.useState([])
  async function loadGreetingForInput(e) {
    e.preventDefault()

    // const res = await fetchMovies('movie/now_playing', {
    //   language: 'zh-TW',
    //   page: 2,
    // })
    // setMovies(res)
    const {data} = await loadGreeting(e.target.elements.name.value)
    setGreeting(data.greeting)
  }
  return (
    <form onSubmit={loadGreetingForInput}>
      <label htmlFor="name">Name</label>
      <input id="name" />
      <button type="submit">Load Greeting</button>
      <div aria-label="greeting">{greeting}</div>
      {/* <ul>
        {movies.map((movie, idx) => {
          return <li key={movie.id}>{movie.title}</li>
        })}
      </ul> */}
    </form>
  )
}

export {GreetingLoader}
