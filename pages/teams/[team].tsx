import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useApp } from '../../components/constants/contexts/AppContext'
import LinearLoader from '../../components/constants/LinearProgress'
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import TeamInfo from '../../components/teams/TeamInfo'
import { getTeams } from '../../helpers/apiCalls'
// import teams from '..'

const Team = () => {
  const { themeClass, setMobile, isDark } = useApp()
  const [ teamDetails, setTeamDetails ] = useState<any>(null)
  const [ linear, setLinear ] = useState<boolean>(false)
  const router =  useRouter()
  const { team } = router.query

  console.log(team);

  const getTeamById = async () => { 
    const opts = {
      params: { id: team },
      headers: { 'Content-Type': 'application/json' }
    }
    const data = await getTeams(opts);
    console.log(data)
   if(data.response.length !== 0) setTeamDetails(data.response[0])
  }
  
  useEffect(()=> {
    if(team)getTeamById()
    console.log(teamDetails)
  },[team])

  return (
    <div className={`flex flex-col ${themeClass.bg} w-full h-screen overflow-hidden`}>
      {linear && <LinearLoader />}
    <NavBar />
    <div className="flex">
        <SideBar active='teams' setLinear={setLinear} />
        <div onClick={()=> setMobile(false)} className={`flex ${themeClass.bgAlt} ${themeClass.text} flex-col px-3 w-full h-[92vh] overflow-y-auto`}>
          <div className={`flex min-h-full flex-col w-full ${themeClass.bg}`}>
            <div className="flex h-[40vh] items-center tablet:h-[50vh] overflow-hidden">
              <img className='min-w-full min-h-full object-cover' src={teamDetails?.venue.image} alt="" />
            </div>
            <div className="relative">
              <div className={`absolute ${themeClass.bg} left-1/2 ${isDark && ' shadow-gray-800'}
               -top-[10em] shadow-2xl  p-2 z-[30]  -translate-x-1/2 flex flex-col w-full phone:w-11/12`}>
                <div className="flex w-full px-3 items-center justify-between">
                  <div className="flex items-center">
                    <Image className="min-h-full object-cover aspect-square rounded-full my-2" height="80" width="80" src={teamDetails?.team.logo} alt="" />
                    <p className="font-semibold ml-3 text-2xl">{teamDetails?.team.name.toUpperCase()}</p>
                  </div>
                  <button className="py-1 px-3 bg-orange-600">Like</button>
                </div>
                <div className="grid gap-y-8 px-3 text-xs phone:text-base grid-cols-2 tablet:grid-cols-3 w-full">
                  <div className="flex flex-col">
                    <p className='text-slate-300'>COUNTRY</p>
                    <p className="text-base phone:text-xl">{teamDetails?.team.country.toUpperCase()}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className='text-slate-300'>FOUNDED</p>
                    <p className="text-base phone:text-xl">{teamDetails?.team.founded}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className='text-slate-300'>VENUE</p>
                    <p className="text-base phone:text-xl">{teamDetails?.venue.name.toUpperCase()}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className='text-slate-300'>CITY</p>
                    <p className="text-base phone:text-xl">{teamDetails?.venue.city.toUpperCase()}</p>
                  </div>
                  <div className="flex flex-col">
                    <p className='text-slate-300'>ADDRESS</p>
                    <p className="text-base phone:text-lg">{teamDetails?.venue.address}</p>
                  </div>
                </div>
              </div>
              <TeamInfo />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Team

