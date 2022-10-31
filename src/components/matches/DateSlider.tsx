import moment from "moment";
import React, { useState } from "react";
import NavSlider from "../constants/NavSlider";
import DatePicker from "./DatePicker";

type Props = {
	date?: Date | string;
	setDate?: React.Dispatch<React.SetStateAction<Date | string>>;
};

const DateSlider = ({ date, setDate }: Props) => {
	const midDate = moment(date).format("YYYY-MM-DD");
	const newdates = [
		moment(date).subtract(2, "days").format("YYYY-MM-DD"),
		moment(date).subtract(1, "days").format("YYYY-MM-DD"),
		midDate,
		moment(date).add(1, "days").format("YYYY-MM-DD"),
		moment(date).add(2, "days").format("YYYY-MM-DD"),
	];
	const [dates, setDates] = useState(newdates);

	return (
		<div className="flex items-center  w-full justify-center ltop:flex-row flex-col px-3">
			<div className="flex items-center flex-wrap space-y-1 mx-auto">
				{dates.map((date) => (
					<label
						key={date}
						onClick={() => (setDate ? setDate(date) : null)}
						// htmlFor="date"
						className="flex items-center mx-1 px-3
          border-2 border-orange-600 cursor-pointer bg-orange-600 justify-center"
					>
						{date}
					</label>
				))}
			</div>
			<DatePicker date={date as Date} setDate={setDate as any} />
		</div>
	);
};

export default DateSlider;
