import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className='flex flex-col'>
        <div className="flex flex-col">
          <Link href={`/`}>
            <div className="flex items-center px-4"></div>
          </Link>
        </div>
    </div>
  )
}

export default SideBar