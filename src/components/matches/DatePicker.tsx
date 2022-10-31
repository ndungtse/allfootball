import * as React from "react";
import moment, { Moment } from "moment";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { TextFieldProps } from "@mui/material/TextField";
import { useApp } from "../constants/contexts/AppContext";

const isWeekend = (date: Moment) => {
	const day = date.day();

	return day === 0 || day === 6;
};

type Props = {
	date: Date | string;
	setDate: React.Dispatch<React.SetStateAction<Date | string>>;
};

export default function DatePicker({ date, setDate }: Props) {
	const [value, setValue] = React.useState<Moment | null>(moment(date));
	const { isDark } = useApp();

	const handleChange = (newValue: Moment | null) => {
		console.log(newValue);
		setValue(moment(newValue));
		setDate(moment(newValue).format("YYYY-MM-DD"));
	};

	const Input = (props: TextFieldProps) => {
		const { InputProps, inputProps } = props;
		const element: any = InputProps?.endAdornment;
		return (
			<div className="relative">
				<TextField
					{...props}
					className="left-1/2"
					sx={{
						width: 0,
						height: 0,
						opacity: 0,
						translate: "10% 0",
						"& .MuiSvgIcon-root": {
							color: isDark ? "white !important" : "black !important",
						},
					}}
					type="text"
					id="date"
					value={inputProps?.value as string}
				/>
				<input
					className="outline-none border-2 border-slate-300/30 bg-transparent rounded-md px-2 py-[0.1em] "
					type="text"
					id="date"
					onChange={(e: any) => handleChange(e.target.value)}
					value={inputProps?.value as string}
				/>
				{element?.props?.children}
			</div>
		);
	};

	return (
		<LocalizationProvider dateAdapter={AdapterMoment}>
			<DesktopDatePicker
				label="Date desktop"
				inputFormat="MM/DD/YYYY"
				value={value}
				onChange={handleChange}
				renderInput={(params: TextFieldProps) => (
					<Input
						{...params}
						sx={{ color: isDark ? "white !important" : "black !important" }}
					/>
				)}
			/>
		</LocalizationProvider>
	);
}
