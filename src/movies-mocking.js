import React from 'react'
import {fetchMovies} from './service/api'

function MoviesMocking() {
  const [loading, setLoading] = React.useState(true)
  const [movies, setMovies] = React.useState([])
  async function loadGreetingForInput(e) {
    e.preventDefault()
    const res = await fetchMovies('movie/now_playing', {
      language: 'zh-TW',
      page: 2,
    })
    setMovies(res)
    setLoading(false)
  }

  return (
    <form onSubmit={loadGreetingForInput}>
      <button type="submit">get api</button>
      {loading ? (
        <p>fetching movies ...</p>
      ) : (
        <ul>
          {movies.map((movie, idx) => {
            return (
              <li key={movie.id} data-testid={movie.id}>
                {movie.title}
              </li>
            )
          })}
        </ul>
      )}
    </form>
  )
}

export {MoviesMocking}
