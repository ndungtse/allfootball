import React from "react";

type Props = {
	statistics: any;
};

const Stats = ({ statistics }: Props) => {
	const awayStat = statistics[1]?.statistics;

	return (
		<div className="p-5 flex flex-col">
			<div className="flex items-center justify-between">
				<img className="w-[40px]" src={statistics[0]?.team?.logo} alt="" />
				<p>TEAM STATS</p>
				<img className="w-[40px]" src={statistics[1]?.team?.logo} alt="" />
			</div>
			{statistics[0]?.statistics?.map((stat: any, i: number) => (
				<RowStat key={i} left={stat.value} right={awayStat[i].value} stat={stat.type} />
			))}
		</div>
	);
};

export default Stats;

const RowStat = ({ left, stat, right }: any) => {
	return (
		<div className="w-full mt-4 flex items-center justify-between">
			<p>{left}</p>
			<p>{stat}</p>
			<p>{right}</p>
		</div>
	);
};
