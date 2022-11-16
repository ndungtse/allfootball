import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import Footer from '../../components/constants/Footer'
import NavBar from '../../components/constants/NavBar'
import SideBar from '../../components/constants/SideBar'
import Match from '../../components/feed/Match'
import DateSlider from '../../components/matches/DateSlider'
import LeagueSlider from '../../components/matches/leagueSlider'
import { useApp } from '../../components/constants/contexts/AppContext'
import LinearLoader from '../../components/constants/LinearProgress'
import { getFixtures } from '../../helpers/apiCalls'
import date from '../../helpers/other'
import DatePicker from '../../components/matches/DatePicker'
import MainLayout from '../../components/layouts/MainLayout'

const Matches = () => {
  const { themeClass, setMobile } = useApp();
  const [fixtures, setFixtures] = useState<any>([])
  const [ linear, setLinear ] = useState<boolean>(false)

  const getFixByLeague = async () => {
    const opts = { 
      params: { season: 2022, date: date },
      headers: { 'Content-Type': 'application/json' } }
      const data = await getFixtures(opts);
      console.log(data)
      setFixtures(data.response)
  }

  useEffect(()=>{
    getFixByLeague()
  },[])

  return (
		<MainLayout setLinear={setLinear} title={'matches'}>
			<div className={`flex flex-col min-h-[92vh] w-full ${themeClass.bg}`}>
				<LeagueSlider active={-1} setLinear={setLinear} />
				<div className="flex flex-col h-full justify-between w-full px-3">
					<div className={`${themeClass.border} w-full border-x-2 border-b-2`}>
						<div className="flex flex-col items-center">
							<p>Date</p>
							<DateSlider date={date} />
						</div>
						<div className="flex flex-col">
							<h1 className="font-bold text-lg mt-3 ml-3">Today's matches</h1>
							{fixtures?.length === 0 && (
								<p className=" mt-3 ml-3">No matches on this date</p>
							)}
							<div className={`flex flex-col ${themeClass.bg} rounded-lg`}>
								<div
									className={`grid ltab:grid-cols-2 ltop:grid-cols-3 p-3 pt-0`}
								>
									{fixtures?.map((fix: any, index: any) => (
										<Match key={index} fix={fix} setLinear={setLinear} />
									))}
								</div>
								<Link href="matches">
									<p className="text-orange-600 mx-3 cursor-pointer hover:underline mb-2">
										See All Matches
									</p>
								</Link>
							</div>
						</div>
					</div>
					{/* <Footer /> */}
				</div>
			</div>
		</MainLayout>
	);
}

export default Matches