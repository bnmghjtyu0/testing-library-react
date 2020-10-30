const greetings = ['Hello', 'Hi', 'Hey there', `What's up`, 'Howdy', `G'day`]

const sleep = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })

async function loadGreeting(subject) {
  return {data: {greeting: `${await fetchRandomGreeting()} ${subject}`}}
}
async function fetchRandomGreeting() {
  await sleep(1000)
  return greetings[Math.floor(Math.random() * greetings.length)]
}

async function fetchMovies(method, params, callback) {
  const paramsString = new URLSearchParams(Object.entries(params)).toString()
  return fetch(
    `https://api.themoviedb.org/3/${method}?api_key=23785b1559bb39249c40d56934f80e6c&${paramsString}`,
  )
    .then((res) => res.json())
    .then((json) => json.results)
}
async function reportError() {
  await sleep(1000)
  return {success: true}
}
export {loadGreeting, fetchMovies, reportError}
