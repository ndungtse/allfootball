import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useApp } from "../../components/constants/contexts/AppContext";
import Footer from "../../components/constants/Footer";
import LinearLoader from "../../components/constants/LinearProgress";
import NavBar from "../../components/constants/NavBar";
import SideBar from "../../components/constants/SideBar";
import Stats from "../../components/feed/Stats";
import MainLayout from "../../components/layouts/MainLayout";
import { getFixtures, getStandings } from "../../helpers/apiCalls";
import date from "../../helpers/other";

const Feed = () => {
	const { themeClass, setMobile } = useApp();
	const [linear, setLinear] = useState(false);
	const [match, setMatch] = useState<any>(null);
	const router = useRouter();
	const [active, setActive] = useState("stats");
	const { id } = router.query;

	const getRes = async () => {
		console.log(date);
		const opts = {
			params: { id: id },
			headers: { "Content-Type": "application/json" },
		};
		const data = await getFixtures(opts);
		setMatch(data.response[0]);
	};

	const today = new Date();
	const dateMatch = new Date(match?.fixture?.date);
	const isToday =
		dateMatch.getDate() === today.getDate() &&
		dateMatch.getMonth() === today.getMonth() &&
		dateMatch.getFullYear() === today.getFullYear();

	const goToLeague = () => {
		setLinear(true);
		router.push(`/leagues/${match?.league?.id}`);
	};

	const goToTeam = (id: number) => {
		setLinear(true);
		router.push(`/teams/${id}`);
	};

	useEffect(() => {
		console.log(id);
		if (id) getRes();
	}, [id]);

	return (
		<MainLayout linear={linear} setLinear={setLinear}>
			<div
				className={`flex flex-col py-3 tablet:w-4/5 max-w-[1000px] w-full ${themeClass.bg} shadow-lg mx-auto`}
			>
				<div className="flex px-3 items-center justify-between w-full">
					<p className="text-violet-400">
						<span className=" cursor-pointer" onClick={goToLeague}>
							{match?.league?.name}
						</span>
						<span className={`${themeClass.text} ml-2`}>
							{isToday ? "Today" : match?.fixture?.date.split("T")[0]}
						</span>
					</p>
					<p>{match?.fixture?.status?.short}</p>
				</div>
				<div className="grid grid-cols-3 max-w-[800px] w-4/5 mx-auto mt-4">
					<div className="flex-col flex items-center">
						<img
							onClick={() => goToTeam(match?.teams?.home?.id)}
							className="ltab:w-[100px] phone:w-[80px] w-[60px] cursor-pointer"
							src={match?.teams?.home?.logo}
							alt=""
						/>
						<p
							className=" cursor-pointer text-center"
							onClick={() => goToTeam(match?.teams?.home?.id)}
						>
							{match?.teams?.home?.name}
						</p>
					</div>
					<div className="flex items-center justify-center">
						<p className="phone:text-[3em]  xs:text-4xl text-2xl">
							{match?.goals?.home}
						</p>
						{match?.fixture?.status?.short === "NS" ? (
							isToday ? (
								<span>
									{match?.fixture?.date.split("T")[1].split(":")[0] +
										":" +
										match?.fixture?.date.split("T")[1].split(":")[1]}
								</span>
							) : (
								<span>VS</span>
							)
						) : (
							<p className="text-3x mx-2 phone:mx-7">-</p>
						)}
						<p className="phone:text-[3em] xs:text-4xl text-2xl">
							{match?.goals?.away}
						</p>
					</div>
					<div className="flex-col flex items-center">
						<img
							onClick={() => goToTeam(match?.teams?.away?.id)}
							className="ltab:w-[100px] phone:w-[80px] w-[60px] cursor-pointer"
							src={match?.teams?.away?.logo}
							alt=""
						/>
						<p
							className=" cursor-pointer text-center"
							onClick={() => goToTeam(match?.teams?.away?.id)}
						>
							{match?.teams?.away?.name}
						</p>
					</div>
				</div>
				<div className="flex w-full overflow-x-auto shadow-md">
					<div className="w-full border-t-[1px] grid auto-cols-fr grid-flow-col mt-3 items-center shadow-md min-w-[350px]">
						<p
							className={`px-6 py-2 hover:bg-slate-300/30 cursor-pointer text-center ${
								active === "trending" && "border-b-2"
							}`}
						>
							TIMELINE
						</p>
						<p
							className={`px-6 py-2 hover:bg-slate-300/30 cursor-pointer text-center ${
								active === "lineups" && "border-b-2"
							}`}
						>
							LINEUPS
						</p>
						<p
							className={`px-6 py-2 hover:bg-slate-300/30 cursor-pointer text-center ${
								active === "stats" && "border-b-2"
							}`}
						>
							STATS
						</p>
						<p
							className={`px-6 py-2 hover:bg-slate-300/30 cursor-pointer text-center ${
								active === "trendings" && "border-b-2"
							}`}
						>
							TRENDINGS
						</p>
					</div>
				</div>
				{match && match?.fixture?.status?.short !== "NS" && (
					<Stats statistics={match?.statistics} />
				)}
			</div>
			{/* <Footer /> */}
		</MainLayout>
	);
};

export default Feed;
