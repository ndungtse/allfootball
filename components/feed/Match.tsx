import Link from 'next/link'
import React from 'react'
import { BiFootball } from 'react-icons/bi'
import { useApp } from '../constants/contexts/AppContext'

const Match = ({fix, setLinear}: any) => {
  const { fixture: { date , venue, status}, goals, league: { name, logo}, 
  score, teams: { home, away } } = fix
  const { themeClass } = useApp()

  const today = new Date()
  const dateMatch = new Date(date)
  const isToday = dateMatch.getDate() === today.getDate() && dateMatch.getMonth() === today.getMonth() && dateMatch.getFullYear() === today.getFullYear()
  
  return (
    <div className={`flex ${themeClass.border} flex-col pb-3 mt-3 px-3 mx-3 items-center border-b-2`}>
      <div className="flex items-center">
        <Link href={`teams/${home.id}`}><div onClick={()=> setLinear(true)}
          className="flex flex-col items-center cursor-pointer">
          {/* <img src="" alt="h logo" /> */}
          <img className='w-[80px] h-[80px]' src={home.logo} alt={home.name} />
          <p className="font-semibold mt-2 text-center">{home.name}</p>
          </div>
        </Link>
          {status.short === "FT"?(
            <div className="flex items-center">
              <p className="font-semibold ml-3 text-[3em] text-center">{score.fulltime.home}</p>
              <div className="flex mx-3 flex-col items-center">
                <img className='w-[50px] h-[50px]' src={logo} alt={name} />
                <p>FT</p>
              </div>  
              <p className="font-semibold mx-2 text-[3em] text-center">{score.fulltime.away}</p>
            </div>
          ):(
            <>
          <div className="flex mx-3 flex-col items-center">
          <img className='w-[50px] h-[50px] rounded-full' src={logo} alt={name} />
            <p className='text-center'>{isToday?'Today':date.split("T")[0]}</p>
            <p className='text-center'>{date.split("T")[1].split(":")[0]+":"+date.split("T")[1].split(":")[1]}</p>
          </div>
          </>
          )}
        <Link href={`teams/${away.id}`}><div onClick={()=> setLinear(true)}
          className="flex flex-col items-center cursor-pointer">
          {/* <img src="" alt="a logo" /> */}
          <img className='w-[80px] h-[80px]' src={away.logo} alt={away.name} />
          <p className="font-semibold mt-2 text-center">{away.name}</p>
          </div>
        </Link>
      </div>
      <p>{venue.name}</p>
    </div>
  )
}

export default Match