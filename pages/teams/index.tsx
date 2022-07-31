import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BiFootball } from 'react-icons/bi';
import Footer from '../../components/constants/Footer';
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import LeagueTeamSlider from '../../components/matches/LeagueTeamSlider';
import { useApp } from '../../components/constants/contexts/AppContext';

const Teams = () => {
  const { themeClass, setMobile } = useApp();
  const [league, setLeague] = useState('all leagues');
  const [leagueTeams, setLeagueTeams] = useState([])

  useEffect(()=>{
    const teams: any = localStorage.getItem('eplteams')
    setLeagueTeams(JSON.parse(teams))
  },[])

  return (
    <div className='flex flex-col w-full h-screen overflow-hidden'>
        <NavBar />
        <div className="flex">
            <SideBar active='teams' />
            <div onClick={()=> setMobile(false)} className={`flex ${themeClass.bgAlt} ${themeClass.text} flex-col px-3 w-full h-[92vh] overflow-y-auto`}>
              <div className={`flex flex-col w-full ${themeClass.bg}`}>
                <LeagueTeamSlider setLeague={ setLeague } handleLeagueTeams={ function (id: number): void {
              throw new Error('Function not implemented.');
            } } /> 
                <div className="flex flex-col h-fl w-full px-3">
                  <div className=" w-full border-x-2 border-b-2">
                    <h1 className='my-3 w-full flex ml-3'>Teams currently in&nbsp;<p className='font-semibold'>{ league }</p></h1>
                    <div className={`grid desktop:grid-cols-4 xtab:grid-cols-3 phone:grid-cols-2 gap-3 p-3 pt-0`}>
                      {leagueTeams.map((team: any, i: any)=> (
                        <Link href={`/`} key={i}>
                          <div className={`flex border-2 flex-col
                           items-center cursor-pointer`}>
                            <BiFootball className='text-[4em]' />
                            <p className='text-center'>Name: {team.team.name} </p>
                            <p className='text-center'>Stadium: {team.venue.name} </p>
                          </div>
                        </Link>
                      )) }
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
        </div>
     </div>    
  )
}

export default Teams