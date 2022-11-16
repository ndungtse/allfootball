import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { BiFootball } from 'react-icons/bi';
import Footer from '../../components/constants/Footer';
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import LeagueTeamSlider from '../../components/matches/LeagueTeamSlider';
import { useApp } from '../../components/constants/contexts/AppContext';
import LinearLoader from '../../components/constants/LinearProgress';
import { getTeams } from '../../helpers/apiCalls';
import Image from 'next/image';

const Teams = () => {
  const { themeClass, setMobile } = useApp();
  const [league, setLeague] = useState({name: 'Confederation Cup', id: 21});
  const [leagueTeams, setLeagueTeams] = useState([])
  const [ linear, setLinear ] = useState<boolean>(false)

  const getTeamsByLeague = async () => {
    const opts = { 
      params: { league: league.id, season: 2022 },
      headers: { 'Content-Type': 'application/json' } }

      const data = await getTeams(opts);
      console.log(data)
      setLeagueTeams(data.response)
  }

  useEffect(()=>{
    console.log(league);
    
    getTeamsByLeague()
  },[league])

  return (
    <div className={`flex flex-col ${themeClass.bg} w-full h-screen overflow-hidden`}>
        {linear && <LinearLoader />}
        <NavBar />
        <div className="flex">
            <SideBar active='teams' setLinear={setLinear} />
            <div onClick={()=> setMobile(false)} className={`flex ${themeClass.bgAlt} ${themeClass.text} flex-col px-3 w-full h-[92vh] overflow-y-auto`}>
              <div className={`flex flex-col w-full ${themeClass.bg}`}>
                <LeagueTeamSlider setLeague={ setLeague } handleLeagueTeams={ function (id: number): void {
              throw new Error('Function not implemented.');
            } } /> 
                <div className="flex flex-col h-fl w-full px-3">
                  <div className={` w-full border-x-2 border-b-2 ${themeClass.border}`}>
                    <h1 className='my-3 w-full flex ml-3'>Teams currently in&nbsp;<p className='font-semibold'>{ league.name }</p></h1>
                    <div className={`grid desktop:grid-cols-4 xtab:grid-cols-3 phone:grid-cols-2 gap-3 p-3 pt-0`}>
                      {leagueTeams.map((team: any, i: any)=> (
                        <Link href={`teams/${team.team.id}`} key={i}>
                          <div onClick={()=> setLinear(true)} className={`flex border-2 flex-col
                           items-center cursor-pointer ${themeClass.border}`}>
                            <Image className="min-h-full object-cover aspect-square rounded-full my-2" height="80" width="80" src={team.team.logo} alt="" />
                            <p className='text-center'>Name: {team.team.name} </p>
                            <p className='text-center'>Stadium: {team.venue.name} </p>
                          </div>
                        </Link>
                      )) }
                    </div>
                  </div>
                </div>
                {/* <Footer /> */}
              </div>
            </div>
        </div>
     </div>    
  )
}

export default Teams