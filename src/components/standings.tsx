import { useEffect, useState } from 'react'
import Standings from '@/models/Standings'
import Image from 'next/image'
import localStandings from '../../standings.json'
import { getFootballStandings2 } from '@/utils/dataAccess'

export default function StandingsComp(props: { favoriteTeam: any }) {
  const [standings, setStandings] = useState<Standings[]>([])
  const [standingLength, setStandingLength] = useState<boolean>(true)

  let favTeam: number
  props.favoriteTeam.map((t: any) => {
    console.log(t.team.id)
    favTeam = t.team.id
  })
  let slicedStandings = standings.slice(0, 6)

  const viewAll = () => {
    setStandingLength(!standingLength)
    slicedStandings = standings
    setStandings(slicedStandings)
  }

  const getStandings = async () => {
    let data: any[] = []
    const response = await getFootballStandings2(2022, 39)
    console.log(response, 'standings')
    response.response.map((standing: any) => {
      for (const league of standing.league.standings) { 
        for (const club of league) {
          response.response.map((s: any) =>
            data.push({
              leagueId: s.league.id,
              leagueName: s.league.name,
              leagueCountry: s.league.country,
              leagueFlag: s.league.flag,
              season: s.league.season,
              standings: club,
            }),
          )

          setStandings(data)
        }
      }
    })

    // localStandings.response.map((standing) => {
    //   for (const league of standing.league.standings) {
    //     for (const club of league) {
    //       localStandings.response.map((s) =>
    //         data.push({
    //           leagueId: s.league.id,
    //           leagueName: s.league.name,
    //           leagueCountry: s.league.country,
    //           leagueFlag: s.league.flag,
    //           season: s.league.season,
    //           standings: club,
    //         }),
    //       )

    //       setStandings(data)
    //     }
    //   }
    // })
  }

  useEffect(() => {
    getStandings()
  }, [])
  return (
    <div className=" bg-gray-200 rounded-xl p-6">
      <div className="flex flex-row justify-between items-center">
        <p className=" text-lg">Standings</p>
        <button onClick={viewAll} className="text-sm">
          View all
        </button>
      </div>

      {standingLength
        ? slicedStandings.map((s: Standings) => (
            <div key={s.standings.rank} className="flex flex-row items-center">
              <div className="flex flex-row space-x-4 my-1">
                <p className="flex justify-center items-center w-4">
                  {s.standings.rank}
                </p>
                <div className="flex flex-row space-x-3">
                  <Image
                    loader={() => s.standings.team.logo}
                    src={s.standings.team.logo}
                    alt={s.standings.team.name}
                    width={24}
                    height={24}
                  />
                  <p className="w-36">{s.standings.team.name}</p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.played}
                  </p>
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.win}
                  </p>
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.draw}
                  </p>
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.lose}
                  </p>
                  <p className="flex justify-center items-center w-10">
                    {s.standings.all.goals.for}:{s.standings.all.goals.against}
                  </p>
                  <p className="flex justify-center items-center w-8 font-semibold">
                    {s.standings.points}
                  </p>
                </div>
              </div>
            </div>
          ))
        : standings.map((s: Standings) => (
            <div key={s.standings.rank} className="flex flex-row items-center">
              <div className="flex flex-row space-x-4 my-1">
                <p className="flex justify-center items-center w-4">
                  {s.standings.rank}
                </p>
                <div className="flex flex-row space-x-3">
                  <Image
                    loader={() => s.standings.team.logo}
                    src={s.standings.team.logo}
                    alt={s.standings.team.name}
                    width={24}
                    height={24}
                  />
                  <p className="w-36">{s.standings.team.name}</p>
                </div>
                <div className="flex flex-row items-center">
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.played}
                  </p>
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.win}
                  </p>
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.draw}
                  </p>
                  <p className="flex justify-center items-center w-8">
                    {s.standings.all.lose}
                  </p>
                  <p className="flex justify-center items-center w-10">
                    {s.standings.all.goals.for}:{s.standings.all.goals.against}
                  </p>
                  <p className="flex justify-center items-center w-8 font-semibold">
                    {s.standings.points}
                  </p>
                </div>
              </div>
            </div>
          ))}
    </div>
  )
}
