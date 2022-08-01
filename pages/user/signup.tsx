import { TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { useApp } from '../../components/constants/contexts/AppContext'

const Signup = () => {
    const {themeClass} = useApp()
    
  return (
    <div className={` ${themeClass.bg} ${themeClass.text} h-screen overflow-hidden w-full`}>
        {/* <Image className='max-w-full max-h-full opacity-30 pointer-events-none' 
        src="/cthing.jpg" alt="" height={1080} width={1920} /> */}
        <div className={`last:absolute p-3 w-[500px] min-w-[280px] ${themeClass.bgAlt} top-1/2
         left-1/2 -translate-x-1/2 -translate-y-1/2`}>
          <form className="flex flex-col items-center">
            <Image className='cursor-pointe' src="/logo.png" alt="" width={80} height={26}/>
            <p>Signup for better experiance</p>
            <div>
              <TextField label="username" sx={{ width: '100%'}} size="small" />
            </div>
          </form>
        </div>
    </div>
  )
}

export default Signup