import { useEffect, useState } from 'react'
import localNextFixtures from 'nextfixtures.json'
import NextFixtures from '@/models/NextFixtures'
import Image from 'next/image'

export default function NextGame({favoriteTeam}: any) {
  const [nextFixtures, setNextFixtures] = useState<NextFixtures[]>([])
  let upcomingFixture = nextFixtures.slice(0, 1)

  const getNextFixtures = async () => {
    let data: any[] = []
    localNextFixtures.response.map((f) =>
      data.push({
        fixtureId: f.fixture.id,
        date: f.fixture.date,
        venue: f.fixture.venue,
        league: f.league,
        teams: f.teams,
        goals: f.goals,
      }),
    )
    setNextFixtures(data)
  }

  const viewAll = () => {}

  useEffect(() => {
    getNextFixtures()
  }, [])

  return (
    <div className="bg-gray-200 rounded-xl p-6">
      <div className="flex flex-row justify-between items-center">
        <p className=" text-lg">Next game</p>
        <button onClick={viewAll} className="text-sm">
          View calendar
        </button>
      </div>

      {upcomingFixture.map((u) => (
        <div key={u.fixtureId} className=" mt-4">
          <div className="flex flex-row justify-center mb-4 items-center">
            <Image
              loader={() => u.league.logo}
              src={u.league.logo}
              alt={u.league.name}
              width={20}
              height={20}
            />
            <p className="mx-1 text-gray-600">{u.league.name}</p>

            <p className="pl-1 border-l border-white text-gray-600">
              21:00 11 November, 2020
            </p>
          </div>
          <div className="flex flex-row justify-center items-center space-x-3">
            <p className="font-semibold w-36 text-right">{u.teams.home.name}</p>
            <div className=" bg-white rounded-xl w-16 h-16 flex justify-center items-center">
              <Image
                loader={() => u.teams.home.logo}
                src={u.teams.home.logo}
                alt={u.teams.home.name}
                width={48}
                height={48}
              />
            </div>
            <p className="font-bold text-gray-700">VS</p>
            <div className=" bg-white rounded-xl w-16 h-16 flex justify-center items-center">
              <Image
                loader={() => u.teams.away.logo}
                src={u.teams.away.logo}
                alt={u.teams.away.name}
                width={48}
                height={48}
              />
            </div>
            <p className="font-semibold w-36">{u.teams.away.name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
