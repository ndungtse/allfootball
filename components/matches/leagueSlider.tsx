import React, { useState } from 'react'
import { useApp } from '../constants/contexts/AppContext';
import NavSlider from '../constants/NavSlider';
import leagues from '../../lib/data/leagues.json'

type Props = {
  setLeague: React.Dispatch<any>;
  handleLeagueFix: (id: number) => void;
}

const LeagueSlider: React.FC<Props> = ({ setLeague, handleLeagueFix }) => {
    const [ active, setActive ] = useState<number>(-1);
    const { themeClass } = useApp()

    const handleLeagueChange = async(league: { id: any; name: string})=> {
        setActive(league.id);
        setLeague({id: league.id, name: league.name});
        handleLeagueFix(league.id)
    }
  return (
    <div className={`sticky pt-1 z-10 top-0 ${themeClass.bg}`}>
    <NavSlider >
        <div className="flex items-center">
            <div onClick={()=>handleLeagueChange({id: -1, name: "all leagues"})} className={`flex ${active===-1?'border-x-2 border-t-2':'border-b-2'}
             cursor-pointer ${themeClass.border} py-2 px-3 items-center`}>
                <p className='font-semibold'>All</p>
            </div>
            {leagues.map((league: any)=>(
            <div key={league.league.id} onClick={()=>handleLeagueChange(league.league)}
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