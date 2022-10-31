import Head from 'next/head'
import React from 'react'
import { useApp } from '../constants/contexts/AppContext'
import LinearLoader from '../constants/LinearProgress'
import NavBar from '../constants/NavBar'
import SideBar from '../constants/SideBar'

type MainLayoutProps = {
    linear?: boolean;
    setLinear: React.Dispatch<React.SetStateAction<boolean>>;
    title?: string;
    children: React.ReactNode;
}

const MainLayout = ({linear, title, setLinear, children}: MainLayoutProps) => {
  const { themeClass, setMobile } = useApp()
  return (
		<>
      <Head>
        <title>{title??'allfootball'}</title>
      </Head>
			<div
				className={`flex flex-col w-full h-screen overflow-hidden ${themeClass.bg}`}
			>
				{linear && <LinearLoader />}
				<NavBar />
				<div className="flex overflow-hidden h-screen">
					<SideBar active="matches" setLinear={setLinear} />
					<div
						onClick={() => setMobile(false)}
						className={`flex ${themeClass.bgAlt} ${themeClass.text} flex-col px-3 w-full h-[92vh] overflow-y-auto`}
					>
						<div
							className={`flex flex-col min-h-[92vh] w-full ${themeClass.bg}`}
						>
							{children}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MainLayout