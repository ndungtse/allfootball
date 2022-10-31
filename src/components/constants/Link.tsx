import Link from 'next/link'
import React from 'react'

type Props = {
    href: string,
    children: React.ReactNode,
    setLinear: React.Dispatch<boolean>,
    optFunction?: (params?: any)=>void,
    setMobile?: React.Dispatch<boolean>
}

const LinkCust = ({ href, children, setLinear, optFunction, setMobile }: Props) => {

    const handleNavigation = ()=>{
        setLinear(true)
        setMobile?setMobile(false):null
        optFunction?optFunction():null
    }

  return (
    <Link href={href}>
        <div onClick={handleNavigation}>
            {children}
        </div>
    </Link>
  )
}

export default LinkCust