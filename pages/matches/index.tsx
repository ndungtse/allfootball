import React from 'react'
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'

const Matches = () => {
  return (
    <div className='flex flex-col w-full h-screen overflow-hidden'>
        <NavBar />
        <div className="flex">
            <SideBar active='matches' />
        </div>
    </div>
  )
}

export default Matches