import Link from 'next/link'
import React from 'react'
import { BiFootball } from 'react-icons/bi'
import { useApp } from '../constants/contexts/AppContext'

const Match = ({fix, setLinear}: any) => {
  const { fixture: { date , venue, status}, goals, league: { name, logo}, 
  score, teams: { home, away } } = fix
  const { themeClass } = useApp()
  
  return (
    <div className={`flex ${themeClass.border} flex-col pb-3 mt-3 px-3 mx-3 items-center border-b-2`}>
      <div className="flex items-center">
        <Link href={`teams/${home.id}`}><div onClick={()=> setLinear(true)}
          className="flex flex-col items-center cursor-pointer">
          {/* <img src="" alt="h logo" /> */}
          <BiFootball className='text-[3em]' />
          <p className="font-semibold">{home.name}</p>
          </div>
        </Link>
        <div className="flex mx-3 flex-col items-center">
          <img className='w-[50px] h-[50px] rounded-full' src={logo} alt={name} />
          <p>{date.split("T")[0]}</p>
          <p>{date.split("T")[1].split(":")[0]+":"+date.split("T")[1].split(":")[1]}</p>
        </div>
        <Link href={`teams/${away.id}`}><div onClick={()=> setLinear(true)}
          className="flex flex-col items-center cursor-pointer">
          {/* <img src="" alt="a logo" /> */}
          <BiFootball className='text-[3em]' />
          <p className="font-semibold">{away.name}</p>
          </div>
        </Link>
      </div>
      <p>{venue.name}</p>
    </div>
  )
}

export default Match