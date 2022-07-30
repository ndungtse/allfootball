import React, { useRef, useState } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import leagues from '../../lib/data/leagues.json'

const LeagueSlider = () => {
    const [ active, setActive ] = useState<number>(-1);
    const [chevAppear, setChevApp] = useState<any>({left: false, right: true})
    const sliderRef = useRef(null)
    const sliderContRef = useRef(null)

    const handleLeagueChange = async(id: number)=> {
        setActive(id);
    }

    const handleSliderScroll = (e: any)=> {
        const slider: any = sliderRef.current
        const scrollWidth = slider.scrollLeft+slider.offsetWidth
        const isLeft = slider.scrollLeft>2
        const isRight = scrollWidth+ 15<= slider.scrollWidth
        console.log(scrollWidth, slider.scrollWidth);
        

        if(isLeft){
          if (isRight && isRight) {
            setChevApp({right: true, left: true})
          }else{
            setChevApp({right: false, left: true})
          }
        }else{
          setChevApp({right: true, left: false})
        }
    }

    const handleLeftChevClick = ()=> {
      const slider: any = sliderRef.current
      slider.scrollLeft -= 200;

    }
    const handleRightChevClick = ()=> {
      const slider: any = sliderRef.current
      slider.scrollLeft += 200;

    }

  return (
    <>
    <div className='relative px-3' >
     {chevAppear.right && <BiChevronRight onClick={handleRightChevClick} className='absolute text-3xl right-[-0.3em] cursor-pointer top-1 ' />}
     {chevAppear.left && <BiChevronLeft onClick={handleLeftChevClick}
      className='absolute text-3xl left-[-0.3em] cursor-pointer top-1 ' />}
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