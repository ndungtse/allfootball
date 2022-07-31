import React from 'react'
import { BiFootball } from 'react-icons/bi'

const Match = ({fix}: any) => {
  const { fixture: { date , venue, status}, goals, league: { name, logo}, 
  score, teams: { home, away } } = fix
  
  return (
    <div className='flex flex-col pb-3 mt-3 px-3 mx-3 items-center border-b-2'>
      <div className="flex items-center">
        <div className="flex flex-col items-center">
          {/* <img src="" alt="h logo" /> */}
          <BiFootball className='text-[3em]' />
          <p className="font-semibold">{home.name}</p>
        </div>
        <div className="flex mx-3 flex-col items-center">
          <img className='w-[50px] h-[50px] rounded-full' src={logo} alt={name} />
          <p>{date.split("T")[0]}</p>
          <p>{date.split("T")[1].split(":")[0]+":"+date.split("T")[1].split(":")[1]}</p>
        </div>
        <div className="flex flex-col items-center">
          {/* <img src="" alt="a logo" /> */}
          <BiFootball className='text-[3em]' />
          <p className="font-semibold">{away.name}</p>
        </div>
      </div>
      <p>{venue.name}</p>
    </div>
  )
}

export default Match