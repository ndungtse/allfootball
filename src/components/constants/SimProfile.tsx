import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { useApp } from './contexts/AppContext';

const SimProfile = () => {
    const { themeClass, setIsDark, isDark } = useApp();
    const { logout } = useAuth0();
    
  return (
    <div className={`absolute hidden z-50 max-w-[400px] ${themeClass.bg} ${themeClass.text} be shadow-xl w-[300px]  -right-5 top-7`}>
      <div className="w-full cursor-pointer py-2 px-4 hover:bg-blue-300/40">
        <p>Dashboard</p>
      </div>
      <div className="w-full cursor-pointer py-2 px-4 hover:bg-blue-300/40">
        <p>Bets</p>
      </div>
      <div className="w-full cursor-pointer py-2 px-4 hover:bg-blue-300/40">
      <button className='w-full flex justify-start h-full' onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
      </div>
    </div>
  )
}

export default SimProfile