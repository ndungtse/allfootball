import React from 'react'
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import LeagueSlider from '../../components/matches/leagueSlider'
import { useApp } from '../../helpers/contexts/AppContext'

const Matches = () => {
  const { themeClass } = useApp()
  // const [isLeague, setIs]
  return (
    <div className='flex flex-col w-full h-screen overflow-hidden'>
        <NavBar />
        <div className="flex">
            <SideBar active='matches' />
            <div className={`flex ${themeClass.bgAlt} flex-col px-3 pt-1 w-full h-[92vh] overflow-y-auto`}>
              <div className={`flex flex-col w-full ${themeClass.bg}`}>
                <LeagueSlider />
                <div className="h-screen w-full px-3">
                  <div className="h-screen w-full border-l-2">
                    <div className='flex flex-col items-center'>
                      <p>Showing Today's matches</p>
                      <div>
                        <label htmlFor='date' className=''>Change</label>
                        <input  onChange={(e:any)=> console.log(e.target.value)} placeholder='date' className='hiddn ml-3' type="date" name="" id="date" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>  
            </div>
        </div>
    </div>
  )
}

export default Matches