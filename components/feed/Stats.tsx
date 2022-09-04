import React from 'react'

const Stats = () => {
  return (
    <div className='p-5 flex flex-col'>
        <div className="flex items-center justify-between">
            <img className='w-[40px]' src="https://media.api-sports.io/football/teams/49.png" alt="" />
            <p>TEAM STATS</p>
            <img className='w-[40px]' src="https://media.api-sports.io/football/teams/49.png" alt="" />
        </div>
        <RowStat left='69%' right='31' stat='Possesion' />
        <RowStat left='69%' right='31' stat='Possesion' />
        <RowStat left='69%' right='31' stat='Possesion' />
        <RowStat left='69%' right='31' stat='Possesion' />
        <RowStat left='69%' right='31' stat='Possesion' />
        <RowStat left='69%' right='31' stat='Possesion' />
    </div>
  )
}

export default Stats

const RowStat = ({left, stat, right}: any) => {

    return (
        <div className='w-full mt-4 flex items-center justify-between'>
            <p>{left}</p>
            <p>{stat}</p>
            <p>{right}</p>
        </div>
    )
}