import React, { useState } from 'react'
import { useApp } from '../../components/constants/contexts/AppContext'
import LinearLoader from '../../components/constants/LinearProgress'
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'

const Players = () => {
  const [ linear, setLinear ] = useState<boolean>(false)
  const { themeClass, setMobile } = useApp();

  return (
    <div className={`flex flex-col w-full ${themeClass.bg} h-screen overflow-hidden`}>
        {linear && <LinearLoader />}
        <NavBar />
        <div className="flex">
            <SideBar active='players' setLinear={setLinear} />
            <div onClick={()=> setMobile(false)} className={`flex ${themeClass.bgAlt} ${themeClass.text} flex-col px-3 w-full h-[92vh] overflow-y-auto`}>
              
            </div>
        </div>
    </div>
  )
}

export default Players