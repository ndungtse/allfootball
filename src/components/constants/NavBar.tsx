import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import {  BiMoon, BiSun, BiUserCircle, BiX } from 'react-icons/bi';
import { useApp } from './contexts/AppContext';
import { useAuth0 } from '@auth0/auth0-react';
import SimProfile from './SimProfile';

const NavBar = () => {
    const { themeClass, setIsDark, isDark } = useApp();
    const { isAuthenticated, loginWithRedirect } = useAuth0();
    const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      {showBanner && (
        <div className={`w-full ${themeClass.bg} ${themeClass.border} border-b px-4 py-2`}>
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-yellow-400' : 'bg-yellow-500'}`}></div>
              <p className={`text-sm ${themeClass.text}`}>
                <span className="font-medium">API Notice:</span> Data may not reflect current season. Free plan limitations apply (2021-2023 seasons, limited date ranges).
              </p>
              <p className={`text-sm ${themeClass.text}`}>
                When I made this project, All APIs were free because they were in beta.
              </p>
            </div>
            <button 
              onClick={() => setShowBanner(false)}
              className={`${themeClass.text} hover:${themeClass.bgAlt} p-1 rounded transition-colors`}
            >
              <BiX className="text-lg" />
            </button>
          </div>
        </div>
      )}
      <div className={`flex w-full ${themeClass.bg} ${themeClass.border} items-center justify-between py-3 px-4 border-b-2`}>
        <div className='phone:scale-100 scale-75 flex items-center' >
            <Link href='/'>
                <>
                <Image className='cursor-pointer' src="/logo.png" alt="" width={80} height={26}/>
                </>
            </Link>
        </div>
        {isAuthenticated?(
            <div className="flex items-center">
                <div className="relative semip">
                    <BiUserCircle className={`text-3xl cursor-pointer p-1 ${themeClass.text} ${themeClass.bgAlt} rounded-full ${isDark && 'bg-[#212f4b]'}`} />
                    <SimProfile />
                </div>
                {isDark?(
                <BiSun onClick={()=> setIsDark(false)} className={`${themeClass.text} text-2xl ml-4 cursor-pointer`} />
                 ):(
                    <BiMoon onClick={()=> setIsDark(true)} className={`${themeClass.text} text-2xl ml-4 cursor-pointer`} />
                 )}
            </div>
        ):(
            <div className="flex phone:px-4 items-center phone:scale-100 scale-75">
                    <button onClick={() => loginWithRedirect()} className={`py-1 text-sm flex items-center justify-center duration-300 border-${themeClass.color1}/90 border-2 text-${themeClass.color1} px-4
                    hover:${themeClass.bg1} hover:${themeClass.textAlt}`}>
                        <p>Login</p>
                    </button>
                <p className={`mx-3 ${themeClass.text}`}>OR</p>
                    <button onClick={() => loginWithRedirect()} className={`${themeClass.bg1} py-1 text-sm flex items-center justify-center duration-300 border-${themeClass.color1}/90 border-2 px-4
                    hover:${themeClass.bg1}/90 ${themeClass.text}`}>
                        Signup
                    </button>
                    {isDark?(
                    <BiSun onClick={()=> setIsDark(false)} className={`${themeClass.text} text-2xl ml-4 cursor-pointer`} />
                     ):(
                        <BiMoon onClick={()=> setIsDark(true)} className={`${themeClass.text} text-2xl ml-4 cursor-pointer`} />
                     )}
                    {/* {isDark==='system'&&(
                        <GiPc  onClick={()=> setIsDark('system')} className={`${themeClass.text} text-3xl ml-4 cursor-pointer`} />
                    )}
                    <BiCaretDown className='mt-3' />  */}
            </div>
        )}
      </div>
    </>
  )
}

export default NavBar