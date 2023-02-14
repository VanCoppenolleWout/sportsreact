const baseURL = 'https://api-football-v1.p.rapidapi.com/v3'
const host = 'api-football-v1.p.rapidapi.com'
const key = '509515fc31mshbec63d62afd4b76p1c1e34jsnd4d4f90c1a49'

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': key,
    'X-RapidAPI-Host': host,
  },
}

const handleError = () => {
  return new Response('ERROR')
}

const handleData = async (
  path: string,
  method: string = 'GET',
  body: any = null,
) => {
  const response = fetch(
    `https://api-football-v1.p.rapidapi.com/v3/standings?season=2020&league=39`,
    options,
  )
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err))

  return await response
}

export const getFootballStandings = async (season: number, league: number) => {
  return await handleData(`standings?season=${season}&league=${league}`)
}

export const getFootballStandings2 = async (season: number, league: number) => {
  const response = await fetch(
    `${baseURL}/standings?season=${season}&league=${league}`,
    options,
  ).catch(handleError)

  return await response.json()
}
