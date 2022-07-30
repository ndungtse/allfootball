import Link from 'next/link';
import React, { useState } from 'react'
import { BiFootball } from 'react-icons/bi';
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import LeagueTeamSlider from '../../components/matches/LeagueTeamSlider';
import { useApp } from '../../helpers/contexts/AppContext';

const Teams = () => {
  const teams: any = localStorage.getItem('eplteams')
  const { themeClass } = useApp();
  const [league, setLeague] = useState('all leagues');
  const [leagueTeams, setLeagueTeams] = useState(JSON.parse(teams))

  return (
    <div className='flex flex-col w-full h-screen overflow-hidden'>
        <NavBar />
        <div className="flex">
            <SideBar active='teams' />
            <div className={`flex ${themeClass.bgAlt} flex-col px-3 w-full h-[92vh] overflow-y-auto`}>
              <div className={`flex flex-col w-full ${themeClass.bg}`}>
                <LeagueTeamSlider setLeague={ setLeague } handleLeagueTeams={ function (id: number): void {
              throw new Error('Function not implemented.');
            } } /> 
                <div className="flex flex-col h-fl w-full px-3">
                  <div className=" w-full border-l-2">
                    <h1 className='my-3 w-full flex ml-3'>Teams currently in&nbsp;<p className='font-semibold'>{ league }</p></h1>
                    <div className={`grid grid-cols-4 gap-3 p-3 pt-0`}>
                      {leagueTeams.map((team: any, i: any)=> (
                        <Link href={`teams/`}>
                          <div className='flex border-2 flex-col items-center cursor-pointer'>
                            <BiFootball className='text-[4em]' />
                            <p>Name: {team.team.name} </p>
                            <p>Stadium: {team.venue.name} </p>
                          </div>
                        </Link>
                      )) }
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
     </div>    
  )
}

export default Teams