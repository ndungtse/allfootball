import Link from 'next/link'
import React, { useState } from 'react'
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import Match from '../../components/feed/Match'
import DateSlider from '../../components/matches/DateSlider'
import LeagueSlider from '../../components/matches/leagueSlider'
import { useApp } from '../../helpers/contexts/AppContext'
import fixtures from '../../lib/data/fixtures.json'

const Matches = () => {
  const { themeClass } = useApp();
  const [league, setLeague] = useState('all leagues');
  const [leagueFix, setLeagueFix] = useState<any>(fixtures)

  const handleLeagueFix = (id: number) => {
    if(id===-1){
      setLeagueFix(fixtures)
    }else{
      const leagueFixs = fixtures.filter((fix: any)=> fix.league.id===id);
      setLeagueFix(leagueFixs);
    }
  }

  return (
    <div className='flex flex-col w-full h-screen overflow-hidden'>
        <NavBar />
        <div className="flex">
            <SideBar active='matches' />
            <div className={`flex ${themeClass.bgAlt} flex-col px-3 w-full h-[92vh] overflow-y-auto`}>
              <div className={`flex flex-col w-full ${themeClass.bg}`}>
                <LeagueSlider setLeague={setLeague} handleLeagueFix={handleLeagueFix} />
                <div className="flex flex-col h-fl w-full px-3">
                  <div className=" w-full border-l-2">
                    <div className='flex flex-col items-center'>
                      <p>Date</p>
                      <DateSlider />
                    </div>
                    <div className="flex flex-col">
                      <h1 className='font-bold text-lg mt-3 ml-3'>{league}</h1>
                      {leagueFix.length===0 && <p className=' mt-3 ml-3'>No matche on this date</p>}
                      <div className={`flex flex-col ${themeClass.bg} rounded-lg`}>
                        <div className={`grid grid-cols-3 p-3 pt-0`}>
                          {leagueFix.map((fix: any, index: any)=>(
                            <Match key={index} fix={fix} />
                          ))}
                        </div>
                        <Link href='matches'><p className='text-orange-600 mx-3 cursor-pointer hover:underline mb-2'>See All Matches</p></Link> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
        </div>
    </div>
  )
}

export default Matches