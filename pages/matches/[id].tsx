import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useApp } from '../../components/constants/contexts/AppContext'
import Footer from '../../components/constants/Footer'
import LinearLoader from '../../components/constants/LinearProgress'
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import Stats from '../../components/feed/Stats'
import { getFixtures, getStandings } from '../../helpers/apiCalls'
import { date } from '../../helpers/other'

const Feed = () => {
  const { themeClass, setMobile } = useApp()
  const [ linear, setLinear ] = useState(false);
  const [ match , setMatch] = useState<any>(null);
  const router = useRouter()
  const { id } = router.query;

  const getRes = async () => {
    console.log(date);
    const opts = {
      params: { id: id },
      headers: { 'Content-Type': 'application/json' }
    }
    const data  = await getFixtures(opts)
    setMatch(data.response[0])
  }

  useEffect(() => {
    // console.log(id);
    // if(id) getRes()
  }, [id])


  return (
    <div className={`flex flex-col ${themeClass.bg} w-full h-screen overflow-hidden`}>
        {linear&&<LinearLoader />}
        <NavBar/>
        <div className="flex">
            <SideBar active='home' setLinear={setLinear} />
            <div onClick={()=> setMobile(false)} className={`flex ${themeClass.bgAlt} ${themeClass.text} flex-col px-3 pt-1 w-full h-[92vh] overflow-y-auto`}>
              <div className={`flex flex-col py-3 tablet:w-4/5 max-w-[1000px] w-full ${themeClass.bg} shadow-lg mx-auto`}>
                <div className="flex px-3 items-center justify-between w-full">
                  <p className='text-violet-400'><Link href={`leagues`}>Premier</Link><span>Today</span></p>
                  <p>Full-time</p>
                </div>
                <div className="flex items-center justify-between max-w-[800px] w-4/5 mx-auto">
                  <div className="flex-col flex items-center">
                    <img className='w-[100px]' src="https://media.api-sports.io/football/teams/49.png" alt="" />
                    <p>Chelsea</p>
                  </div>
                  <p className='text-[3em]'>2</p>
                  <p className='text-3xl'>-</p>
                  <p className='text-[3em]'>1</p>
                  <div className="flex-col flex items-center">
                    <img className='w-[100px]' src="https://media.api-sports.io/football/teams/49.png" alt="" />
                    <p>West Ham</p>
                  </div>
                </div>
                <div className="w-full border-t-[1px] grid grid-cols-4 mt-3 items-center shadow-md">
                  <p className="px-6 py-2">TIMELINE</p>
                  <p className="px-6 py-2">LINEUPS</p>
                  <p className="px-6 py-2 border-b-2">STATS</p>
                  <p className="px-6 py-2">TRENDINGS</p>
                </div>
                <Stats />
              </div>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Feed