import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Footer from '../components/constants/Footer'
import NavBar from '../components/constants/NavBar'
import SideBar from '../components/constants/SideBar'
import Match from '../components/feed/Match'
import { useApp } from '../helpers/contexts/AppContext'
import eplfix from '../lib/data/eplfix.json'

const Feed = () => {
  const { themeClass } = useApp()

  console.log(eplfix)

  return (
    <div className='flex flex-col w-full h-screen overflow-hidden'>
        <NavBar/>
        <div className="flex">
            <SideBar active='home' />
            <div className={`flex ${themeClass.bgAlt} flex-col px-3 pt-1 w-full h-[92vh] overflow-y-auto`}>
              <div className="relative w-full h-[30vh] flex items-center">
                <div className='flex items-center overflow-hidden h-full w-full'>
                  <Image src="/uclchamp.jpg" alt="" height={1080} width={1920} />
                </div>
                <div className="absolute px-3 text-white justify-center top-0 left-0 w-full flex flex-col bg-black/50 h-full">
                  <p className="text-lg font-semibold opacity-80">UCL</p>
                  <div className="flex xs:text-4xl flex-wrap">
                    <p className=" mt-2 font-semibold">CHELSEA</p>
                    <p className=" mt-2 font-semibold mx-2">1-0</p>
                    <p className=" mt-2 font-semibold">MAN CITY</p>
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
                  <div className={`flex flex-wrap p-3 pt-0`}>
                    {eplfix.map((fix: any, index)=>(
                      <Match key={index} fix={fix} />
                    ))}
                  </div>
                  <Link href='matches'><p className='text-orange-600 mx-3 cursor-pointer hover:underline mb-2'>See All Matches</p></Link> 
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className='font-bold text-lg mt-3 ml-3'>La liga</h1>
                <div className={`flex flex-col ${themeClass.bg} rounded-lg`}>
                  <div className={`grid grid-cols-3 p-3 pt-0`}>
                    {eplfix.map((fix: any, index)=>(
                      <Match key={index} fix={fix} />
                    ))}
                  </div>
                  <Link href='matches'><p className='text-orange-600 mx-3 cursor-pointer hover:underline mb-2'>See All Matches</p></Link> 
                </div>
              </div>
              <Footer />
            </div>
        </div>
    </div>
  )
}

export default Feed