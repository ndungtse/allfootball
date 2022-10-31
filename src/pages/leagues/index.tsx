import Link from "next/link";
import React, { useState } from "react";
import { BiFootball } from "react-icons/bi";
import Footer from "../../components/constants/Footer";
import NavBar from "../../components/constants/NavBar";
import SideBar from "../../components/constants/SideBar";
import { useApp } from "../../components/constants/contexts/AppContext";
import leaguesData from "../../lib/data/leagues.json";
import LinearLoader from "../../components/constants/LinearProgress";
import Image from "next/image";
import MainLayout from "../../components/layouts/MainLayout";

const Leagues = () => {
	const { themeClass, setMobile } = useApp();
	const [leagueType, setLeagueType] = useState("League");
	const [leagues, setLeagues] = useState(leaguesData);
	const [linear, setLinear] = useState<boolean>(false);

	const handleLeagueTypeChange = (type: string) => {
		setLeagueType(type);
		setLeagues(leaguesData.filter((l: any) => l.league.type === type));
	};

	return (
		<MainLayout linear={linear} setLinear={setLinear}>
			<div
				className={`flex flex-col items-center min-h[92vh]  p-2 w-full ${themeClass.bg}`}
			>
				<h2 className="text-center w-full font-semibold text-lg">
					Leagues and Cups Information
				</h2>
				<div className="flex w-full relative items-center justify-center mt-3">
					<div
						className={`absolute ${themeClass.border} top-0 left-0 h-full z-0 w-full border-b-2`}
					></div>
					<div className={`flex items-center z-10 ${themeClass.bg}`}>
						<div
							onClick={() => handleLeagueTypeChange("League")}
							className={`flex ${
								leagueType === "League"
									? "border-x-2 border-t-2"
									: "border-b-2 border-t-2 border-t-transparent"
							}
                       cursor-pointer ${
													themeClass.border
												} py-2 px-3 items-center`}
						>
							<p className="font-semibold conc w-full">Leagues</p>
						</div>
						<div
							onClick={() => handleLeagueTypeChange("Cup")}
							className={`flex ${
								leagueType === "Cup"
									? "border-x-2 border-t-2"
									: "border-b-2 border-t-2  border-t-transparent"
							}
                       cursor-pointer py-2 px-3 items-center ${
													themeClass.border
												}`}
						>
							<p className="font-semibold conc w-full">Cups</p>
						</div>
					</div>
				</div>
				<div className="flex flex-col min-h-[78.5vh] justify-between w-full h-full">
					<div
						className={`w-full ${themeClass.border} h-full border-x-2 border-b-2`}
					>
						<div
							className={`grid mt-3 desktop:grid-cols-4 xtab:grid-cols-3 phone:grid-cols-2 gap-3 p-3 pt-0`}
						>
							{leagues.map((league: any, i: any) => (
								<Link href={`teams/`} key={i}>
									<div
										className={`flex border-2 flex-col
                             items-center cursor-pointer ${themeClass.border}`}
									>
										<Image
											className="min-h-full object-cover aspect-square rounded-full my-2"
											height="100"
											width="100"
											src={league.league.logo}
											alt=""
										/>
										<p className="text-center">Name: {league.league.name} </p>
										{/* <p className='text-center'>Stadium: {league.venue.name} </p> */}
									</div>
								</Link>
							))}
						</div>
					</div>
					<Footer />
				</div>
			</div>
		</MainLayout>
	);
};

export default Leagues;
