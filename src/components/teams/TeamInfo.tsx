import React, { useState } from 'react'
import { useApp } from '../constants/contexts/AppContext'
import NavSlider from '../constants/NavSlider'

const TeamInfo = () => {
    const [content, setContent] = useState("Player")
    const { themeClass } = useApp()

    const handleContentChange = (name: string) => {
      setContent(name)
    }

  return (
    <div className='desktop:pt-11 mt-[7em] xtab:mt-[4em] phone:mt-[6.5em] flex flex-col items-center px-2 w-full'>
        <div className={`flex flex-col items-center z-10 ${themeClass.bg}`}>
          <NavSlider>
            <div onClick={()=>handleContentChange('Player')}
              className={`flex ${content==='Player'?'border-x-2 border-t-2':'border-b-2 border-t-2 border-t-transparent'}
               cursor-pointer ${themeClass.border} py-2 px-3 items-center`}>
              <p className='font-semibold conc w-full'>Players</p>
            </div>
            <div onClick={()=>handleContentChange('Stadium')}
              className={`flex ${content==='Stadium'?'border-x-2 border-t-2':'border-b-2 border-t-2  border-t-transparent'}
               cursor-pointer py-2 px-3 items-center ${themeClass.border}`}>
              <p className='font-semibold conc w-full'>Stadium</p>
            </div>
            <div onClick={()=>handleContentChange('Rivals')}
              className={`flex ${content==='Rivals'?'border-x-2 border-t-2':'border-b-2 border-t-2  border-t-transparent'}
               cursor-pointer py-2 px-3 items-center ${themeClass.border}`}>
              <p className='font-semibold conc w-full'>Rivals</p>
            </div>
            <div onClick={()=>handleContentChange('Honours')}
              className={`flex ${content==='Honours'?'border-x-2 border-t-2':'border-b-2 border-t-2  border-t-transparent'}
               cursor-pointer py-2 px-3 items-center ${themeClass.border}`}>
              <p className='font-semibold conc w-full'>Honours</p>
            </div>
            <div onClick={()=>handleContentChange('Sponsorship')}
              className={`flex ${content==='Sponsorship'?'border-x-2 border-t-2':'border-b-2 border-t-2  border-t-transparent'}
               cursor-pointer py-2 px-3 items-center ${themeClass.border}`}>
              <p className='font-semibold conc w-full'>Sponsorship</p>
            </div>
          </NavSlider>
        </div>
    </div>
  )
}

export default TeamInfo