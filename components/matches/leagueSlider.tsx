import React, { useState } from 'react'
import NavSlider from '../../helpers/NavSlider';
import leagues from '../../lib/data/leagues.json'

const LeagueSlider = ({ setLeague, handleLeagueFix }: any) => {
    const [ active, setActive ] = useState<number>(-1);

    const handleLeagueChange = async(league: { id: any; name: string})=> {
        setActive(league.id);
        setLeague(league.name)
        handleLeagueFix(league.id)
    }
  return (
    <>
    <NavSlider >
        <div className="flex items-center">
            <div onClick={()=>handleLeagueChange({id: -1, name: "all leagues"})} className={`flex ${active===-1?'border-x-2 border-t-2':'border-b-2'}
             cursor-pointer py-2 px-3 items-center`}>
                <p className='font-semibold'>All</p>
            </div>
            {leagues.map((league: any)=>(
            <div key={league.league.id} onClick={()=>handleLeagueChange(league.league)}
             className={`flex ${active===league.league.id?'border-x-2 border-t-2':'border-b-2'} cursor-pointer py-2 px-3 items-center`}>
                <p className='font-semibold conc w-full'>{league.league.name.split(' ').map((w: string, i: any)=> <span key={i}>{w}&nbsp;</span>)}</p>
            </div>
            ))}
        </div>
      </NavSlider>
    </>
  )
}

export default LeagueSlider