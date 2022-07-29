import Link from 'next/link'
import React from 'react'
import { BiArrowBack, BiFootball, BiHome, BiMenu } from 'react-icons/bi'
import { FiHome } from 'react-icons/fi'
import { FaPeopleCarry, FaRegPlayCircle, FaTeamspeak, FaTrophy, FaTshirt, FaUsers } from 'react-icons/fa'
import { useApp } from '../../helpers/contexts/AppContext';

const SideBar = ({active}: any) => {
  const { themeClass, mobile, setMobile } = useApp();

  return (
    <>
      {mobile?(
        <BiMenu onClick={()=> setMobile(false)} className="tablet:hidden z-10 absolute top-[8vh] cursor-pointer left-1" />
        ):(
        <BiArrowBack onClick={()=> setMobile(true)} className="tablet:hidden z-10 absolute top-[8vh] cursor-pointer left-1" />
        )}
    <div className={`flex flex-col z-[5] duration-500 ${mobile? 'left-[-500px]':'left-0'}
    ${themeClass.bg} border-r-2 tablet:h-full h-[91.65vh] absolute tablet:static`}>
        
        <div className="flex flex-col mt-4">
          <Link href={`/`}>
            <div className={`flex cursor-pointer mt-2 font-semibold items-center border-l-2 
                ${active==='home'&&`${themeClass.textAlt1} border-${themeClass.color1}`} px-4 pr-6 py-1`}>
                <FiHome fill={active==='home'?themeClass.color:''} stroke={'#ececec'} className='text-xl text-[#ececec]' />
                <span className="ml-3 text-md">Home</span>
            </div>
          </Link>
          <Link href={`/matches`}>
            <div className={`flex cursor-pointer mt-2 font-semibold items-center border-l-2 
             ${active==='matches'&&`${themeClass.textAlt1} border-${themeClass.color1}`} px-4 pr-6 py-1`}>
                <BiFootball fill={active==='matches'?themeClass.color:''} stroke={'#ececec'} className='text-xl text-[#ececec]' />
                <span className="ml-3 text-md">Matches</span>
            </div>
          </Link>
          <Link href={`/leagues`}>
            <div className={`flex cursor-pointer mt-2 font-semibold items-center border-l-2 
             ${active==='leagues'&&`${themeClass.textAlt1} border-${themeClass.color1}`} px-4 pr-6 py-1`}>
                <FaTrophy fill={active==='leagues'?themeClass.color:''} stroke={'#ececec'} className='text-xl text-[#ececec]' />
                <span className="ml-3 text-md">Leagues</span>
            </div>
          </Link>
          <Link href={`/teams`}>
            <div className={`flex cursor-pointer mt-2 font-semibold items-center border-l-2 
             ${active==='teams'&&`${themeClass.textAlt1} border-${themeClass.color1}`} px-4 pr-6 py-1`}>
                <FaUsers fill={active==='teams'?themeClass.color:''} stroke={'#ececec'} className='text-xl text-[#ececec]' />
                <span className="ml-3 text-md">Teams</span>
            </div>
          </Link>
          <Link href={`/players`}>
            <div className={`flex cursor-pointer mt-2 font-semibold items-center border-l-2 
             ${active==='players'&&`${themeClass.textAlt1} border-${themeClass.color1}`} px-4 pr-6 py-1`}>
                <FaTshirt fill={active==='players'?themeClass.color:''} stroke={'#ececec'} className='text-xl text-[#ececec]' />
                <span className="ml-3 text-md">Players</span>
            </div>
          </Link>
        </div>
    </div>
    </>
  )
}

export default SideBar