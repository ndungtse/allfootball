import React, { useRef, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi';
import leagues from '../../lib/data/leagues.json'

const LeagueSlider = () => {
    const [ active, setActive ] = useState<number>(-1);
    const sliderRef = useRef(null)
    const sliderContRef = useRef(null)

    const handleLeagueChange = async(id: number)=> {
        setActive(id);
    }

    const handleSliderScroll = (e: any)=> {
        // const slider: any = sliderRef.current
        // const conts: any = sliderContRef.current
        // console.log(e, conts.offsetLeft );
        // conts.style.transform = "translateX('1px')"
    }

  return (
    <>
    <div className='relative px-3' >
     <BiChevronRight className='absolute text-3xl right-[-0.4em] cursor-pointer top-1 ' />
    <div ref={sliderRef} onScroll={handleSliderScroll} 
      className='w-full relative flex overflow-x-auto hslider'>
        <div className="flex items-center" ref={sliderContRef}>
            <div onClick={()=>handleLeagueChange(-1)} className={`flex ${active===-1?'border-x-2 border-t-2':'border-b-2'}
             cursor-pointer py-2 px-3 items-center`}>
                <p className='font-semibold'>All</p>
            </div>
            {leagues.map((league: any)=>(
            <div key={league.league.id} onClick={()=>handleLeagueChange(league.league.id)}
             className={`flex ${active===league.league.id?'border-x-2 border-t-2':'border-b-2'} cursor-pointer py-2 px-3 items-center`}>
                <p className='font-semibold conc w-full'>{league.league.name.split(' ').map((w: string, i: any)=> <span key={i}>{w}&nbsp;</span>)}</p>
            </div>
            ))}
        </div>
    </div>
    </div>
    </>
  )
}

export default LeagueSlider