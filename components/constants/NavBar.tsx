import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';
import { useApp } from '../../helpers/contexts/AppContext';

const NavBar = () => {
    const { user } = useSelector((state: any)=> state.user);
    const { themeClass } = useApp();

  return (
    <div className='flex w-full items-center justify-between py-3 px-4 border-b-2'>
        <div className='phone:scale-100 scale-75 flex items-center' >
            <Link href='/'>
                <>
                <Image className='cursor-pointer' src="/vercel.svg" alt="" width={100} height={26}/>
                </>
            </Link>
        </div>
        {user?(
            <div className=""></div>
        ):(
            <div className="flex phone:px-4 items-center phone:scale-100 scale-75">
                <Link href={`/login`}>
                    <button className={`py-1 flex items-center justify-center duration-300 border-${themeClass.color1}/90 border-2 text-${themeClass.color1} px-4
                    hover:${themeClass.bg1}/90 hover:${themeClass.textAlt}`}>
                        <p>Login</p>
                    </button>
                </Link>
                <p className='mx-3'>OR</p>
                <Link href={`/signup`}>
                    <button className={`${themeClass.bg1} py-1 flex items-center justify-center duration-300 border-${themeClass.color1}/90 border-2 px-4
                    hover:${themeClass.bg1}/90 ${themeClass.textAlt}`}>
                        Signup
                    </button>
                </Link>
            </div>
        )}
    </div>
  )
}

export default NavBar