import React, { useState } from 'react'
import { useApp } from '../constants/contexts/AppContext';
import NavSlider from '../constants/NavSlider';
import leagues from '../../lib/data/leagues.json'

type Props = {
  setLeague: React.Dispatch<any>;
  handleLeagueTeams: (id: number) => void;
}

const LeagueTeamSlider: React.FC<Props> = ({ setLeague, handleLeagueTeams }) => {
    const [ active, setActive ] = useState<number>(-1);
    const { themeClass } = useApp()

    const handleLeagueChange = async(league: { id: any; name: string})=> {
        setActive(league.id);
        setLeague((prev: any)=> ({id: league.id, name: league.name}));
        // handleLeagueTeams(league.id)
    }
  return (
    <div className={`sticky pt-1 z-10 top-0 ${themeClass.bg}`}>
    <NavSlider >
        <div className="flex items-center">
            {leagues.map((league: any)=>(
            <div key={league.league.id} onClick={()=>handleLeagueChange(league.league)}
             className={`flex ${active===league.league.id?'border-x-2 border-t-2':'border-b-2'} cursor-pointer py-2 px-3 items-center ${themeClass.border}`}>
                <p className='font-semibold conc w-full'>{league.league.name.split(' ').map((w: string, i: any)=> <span key={i}>{w}&nbsp;</span>)}</p>
            </div>
            ))}
        </div>
      </NavSlider>
    </div>
  )
}

export default LeagueTeamSlider