import { Inter } from '@next/font/google'
import { useEffect, useState } from 'react'
import StandingsComp from '@/components/standings'
import SideBar from '@/components/sidebar'
import NextGame from '@/components/nextgame'
import GameStats from '@/components/gamestats'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-slate-100 h-[100vh]">
      <div className="py-8">
        <div className="flex flex-row">
          <SideBar />
          <div className="mr-12 pl-12 border-l">
            <p className="text-lg text-gray-700">Welcome</p>
            <p className="font-semibold text-5xl text-gray-800">Dashboard</p>
            <NextGame />
            <GameStats />
            <StandingsComp />
          </div>
        </div>
      </div>
    </div>
  )
}
