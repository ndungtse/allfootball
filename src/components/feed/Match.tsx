import { useRouter } from "next/router";
import React from "react";
import { useApp } from "../constants/contexts/AppContext";

const Match = ({ fix, setLinear }: any) => {
	const {
		fixture: { date, venue, status, id },
		goals,
		league: { name, logo },
		score,
		teams: { home, away },
	} = fix;
	const { themeClass, isDark } = useApp();
	const router = useRouter();

	const today = new Date();
	const dateMatch = new Date(date);
	const isToday =
		dateMatch.getDate() === today.getDate() &&
		dateMatch.getMonth() === today.getMonth() &&
		dateMatch.getFullYear() === today.getFullYear();

	const handleClick = (id: any) => {
		console.log("goting to tch");
		setLinear(true);
		router.push(`/matches/${id}`);
		console.log("goting to match");
	};

	return (
		<div
			onClick={() => router.push(`/matches/${id}`)}
			className={`flex ${themeClass.border} ${
				isDark ? "hover:bg-slate-800/40" : "hover:bg-stone-300/30"
			}  pt-4 cursor-pointer flex-col pb-3 xs:px-3 phone:mx-3 items-center border-b-2`}
		>
			<div className="flex items-center">
				<div className="flex flex-col items-center cursor-pointer">
					{/* <img src="" alt="h logo" /> */}
					<img
						className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
						src={home.logo}
						alt={home.name}
					/>
					<p className="font-semibold mt-2 text-center">{home.name}</p>
				</div>
				{status.short === "FT" ? (
					<div className="flex items-center">
						<p className="font-semibold ml-3 phone:text-[3em] text-[1.5em] text-center">
							{score.fulltime.home}
						</p>
						<div className="flex mx-3 flex-col items-center">
							<img
								className="xs:max-w-[50px] max-w-[30px] aspect-square h-[50px]"
								src={logo}
								alt={name}
							/>
							<p>FT</p>
						</div>
						<p className="font-semibold mx-2 phone:text-[3em] text-[1.5em] text-center">
							{score.fulltime.away}
						</p>
					</div>
				) : (
					<>
						<div className="flex mx-3 flex-col items-center">
							<img
								className="max-w-[50px] aspect-square h-[50px] rounded-full"
								src={logo}
								alt={name}
							/>
							<p className="text-center">
								{isToday ? "Today" : date.split("T")[0]}
							</p>
							<p className="text-center">
								{date.split("T")[1].split(":")[0] +
									":" +
									date.split("T")[1].split(":")[1]}
							</p>
						</div>
					</>
				)}
				<div
					onClick={() => setLinear(true)}
					className="flex flex-col items-center cursor-pointer"
				>
					{/* <img src="" alt="a logo" /> */}
					<img
						className="aspect-square phone:max-w-[70px] xs:max-w-[60px] max-w-[40px]"
						src={away.logo}
						alt={away.name}
					/>
					<p className="font-semibold mt-2 text-center">{away.name}</p>
				</div>
			</div>
			<p>{venue.name}</p>
		</div>
	);
};

export default Match;
