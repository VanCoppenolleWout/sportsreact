import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import StandingsComp from '@/components/standings'
import SideBar from '@/components/sidebar'
import NextGame from '@/components/nextgame'
import GameStats from '@/components/gamestats'
import { getClubIdFromName } from '@/utils/dataAccess'
import Team from '../models/Team'
import Image from 'next/image'

export default function Home() {
  const [favoriteTeam, setFavoriteTeam] = useState<string>('Burnley')
  const [favoriteTeamArr, setFavoriteTeamArr] = useState<Team[]>([])

  useEffect(() => {
    const changeTeam = async () => {
      let data: any[] = []
      const response = await getClubIdFromName(favoriteTeam)

      response.response.map((t: Team) => {
        data.push({
          team: t.team,
          venue: t.venue,
        }),
          setFavoriteTeamArr(data)
      })
    }

    changeTeam()
  }, [])

  return (
    <div className="bg-slate-100 h-full">
      <div className="py-8">
        <div className="flex flex-row">
          <SideBar />
          <div className="mr-12 pl-12 border-l">
            <div>
              <p className="text-lg text-gray-700">Welcome</p>
              <p className="font-semibold text-5xl text-gray-800">Dashboard</p>
            </div>
            {/* {favoriteTeamArr.map((f: Team) => (
              <div key={f.team.teamId} className='flex flex-row items-center space-x-4'>
                <Image
                  loader={() => f.team.teamLogo}
                  src={f.team.teamLogo}
                  alt={f.team.teamName}
                  width={20}
                  height={20}
                />
                <p>{f.team.teamName}</p>
              </div>
            ))} */}

            <div className="space-y-4 pt-4">
              <NextGame favoriteTeam={favoriteTeamArr} />
              <GameStats favoriteTeam={favoriteTeamArr} />
              <StandingsComp favoriteTeam={favoriteTeamArr} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
