import React, { useState } from 'react'
import { useApp } from '../constants/contexts/AppContext';
import NavSlider from '../constants/NavSlider';
import leagues from '../../lib/data/leagues.json'
import { useRouter } from 'next/router';

type Props = {
  active?: number;
  setLinear: React.Dispatch<React.SetStateAction<boolean>>;
}

const LeagueSlider: React.FC<Props> = ({ active, setLinear }) => {
    const { themeClass } = useApp()
    const router = useRouter()

    const handleLeagueChange = async(league: { id: any; name: string})=> {
        console.log(league.id);
        setLinear(true)
        router.push(`/matches/leagues/${league.id}`)
    }
  return (
    <div className={`sticky pt-1 z-10 top-0 ${themeClass.bg}`}>
    <NavSlider >
        <div className="flex items-center">
            <div onClick={()=> router.push(`/matches`)} className={`flex ${active===-1?'border-x-2 border-t-2':'border-b-2'}
             cursor-pointer ${themeClass.border} py-2 px-3 items-center`}>
                <p className='font-semibold'>All</p>
            </div>
            {leagues.map((league: any)=>(
            <div key={league.league.id} onClick={()=> handleLeagueChange(league.league)}
             className={`flex ${active===league.league.id?'border-x-2 border-t-2':'border-b-2'} ${themeClass.border} cursor-pointer py-2 px-3 items-center`}>
                <p className='font-semibold conc w-full'>{league.league.name.split(' ').map((w: string, i: any)=> <span key={i}>{w}&nbsp;</span>)}</p>
            </div>
            ))}
        </div>
      </NavSlider>
    </div>
  )
}

export default LeagueSlider