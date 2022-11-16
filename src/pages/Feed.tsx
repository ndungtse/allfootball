import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Footer from '../components/constants/Footer'
import NavBar from '../components/constants/NavBar'
import SideBar from '../components/constants/SideBar'
import Match from '../components/feed/Match'
import { useApp } from '../components/constants/contexts/AppContext'
// import eplfix from '../lib/data/eplfix.json'
import LinearLoader from '../components/constants/LinearProgress'
import { getFixtures, getStandings } from '../helpers/apiCalls'
import date from '../helpers/other'
import Standings from '../components/leagues/Standings'

const Feed = () => {
  const { themeClass, setMobile } = useApp()
  const [ linear, setLinear ] = useState(false);
  const [ eplfix, setEplfix ] = useState([]);
  const [ standings, setStandings ] = useState<any>(null);

  const getRes = async () => {
    console.log(date);
    
    const opts = { 
    params: {season: '2022', league: '39', date: date},
     headers: { 'Content-Type': 'application/json' } }
    const data  = await getFixtures(opts)
    setEplfix(data.response)
    console.log(data);
  }

  const getStands = async () => {
    const opts = {
      params: {season: '2022', league: '39'},
      headers: { 'Content-Type': 'application/json' }
    }
    const data = await getStandings(opts);
    console.log(data);
    setStandings(data.response[0])
  }

  useEffect(() => {
    getRes()
  }, [])
  useEffect(() => {
    getStands()
  }, [])

  return (
    <div className={`flex flex-col ${themeClass.bg} w-full h-screen overflow-hidden`}>
        {linear&&<LinearLoader />}
        <NavBar/>
        <div className="flex">
            <SideBar active='home' setLinear={setLinear} />
            <div onClick={()=> setMobile(false)} className={`flex ${themeClass.bgAlt} ${themeClass.text} flex-col px-3 pt-1 w-full h-[92vh] overflow-y-auto`}>
              <div className="relative w-full h-[30vh] flex items-center">
                <div className='flex items-center overflow-hidden h-full w-full'>
                  <Image src="/uclchamp.jpg" alt="" height={1080} width={1920} />
                </div>
                <div className="absolute px-3 text-white justify-center top-0 left-0 w-full flex flex-col bg-black/50 h-full">
                  <p className="text-lg font-semibold opacity-80">UCL</p>
                  <div className="flex xs:text-xl flex-wrap">
                    <p className=" mt-2 font-semibold">uefa champions league draw to be confirmed</p>
                  </div>
                  <Link href={`/login`} className=''>
                    <button className={`py-1 flex mt-3 w-[150px] items-center justify-center duration-300
                     border-orange-600/90 border-2 text-white px-4
                    hover:${themeClass.bg1}/90 hover:${themeClass.textAlt}`}>
                        <p>More Details</p>
                    </button>
                </Link>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className='font-bold text-lg mt-3 ml-3'>Premier Legue</h1>
                <div className={`flex flex-col ${themeClass.bg} rounded-lg`}>
                <div className={`grid ltab:grid-cols-2 xtab:grid-cols-3 pb-3 phone:px-3 pt-0`}>
                    {eplfix.map((fix: any, index)=>(
                      <Match key={index} fix={fix} setLinear={setLinear} />
                    ))}
                  </div>
                  <Link href='matches'><p className='text-orange-600 mx-3 cursor-pointer hover:underline mb-2'>See All Matches</p></Link> 
                </div>
                <Standings data={standings?.league?.standings[0]} />
              </div>
              {/* <Footer /> */}
            </div>
        </div>
    </div>
  )
}

export default Feed