import React, { createContext, useContext, useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

interface appContextType {
	isDark: any;
	setIsDark: (isDark: any) => void;
	themeClass: any;
	mobile: boolean;
	setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

const lightTheme = createTheme({
	palette: {
		mode: "light",
	},
});

const appDefaultValues = {
	isDark: false,
	setIsDark: () => {},
	themeClass: {},
	mobile: false,
	setMobile: () => {},
};

const themes = {
	light: {
		text: "text-black",
		bg: "bg-white",
		bg1: "bg-orange-600",
		bgAlt: "bg-slate-100",
		textAlt: "text-white",
		textAlt1: "text-orange-600",
		color: "#ea580c",
		textc: "#000",
		border: "border-[#e5e7eb]",
		border1: "border-white",
		color1: "orange-600",
	},
	dark: {
		text: "text-slate-100",
		bg: "bg-[#040921]",
		bg1: "bg-orange-600",
		bgAlt: "bg-[#040921c]",
		textAlt: "text-black",
		textAlt1: "text-orange-600",
		border: "border-[#212f4b]",
		border1: "border-[#040921]",
		textc: "#fff",
		color: "#ea580c",
		color1: "orange-600",
	},
};

const AppContext = createContext<appContextType>(appDefaultValues);

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
	// const sysTheme = matchMedia('(prefers-color-scheme: dark)').matches
	const [isDark, setIsDark] = useState<any>("");
	const [mobile, setMobile] = useState(false);
	const [themeClass, setThemeClass] = useState(themes.light);
	const [muiTheme, setMuiTheme] = useState(lightTheme);
	// console.log(sysTheme);

	const saveTheme = () => {
		const sysTheme =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		setThemeClass(isDark ? themes.dark : themes.light);
		if (isDark === "system") {
			setThemeClass(sysTheme ? themes.dark : themes.light);
			setMuiTheme(sysTheme ? darkTheme : lightTheme);
		}
		console.log("sav", muiTheme);
		if (isDark) {
			localStorage.setItem("theme", "dark");
			setMuiTheme(darkTheme);
		} else if (isDark === "system") {
			localStorage.removeItem("theme");
		} else {
			setMuiTheme(lightTheme);
			localStorage.setItem("theme", "light");
		}
	};

	const getSavedTheme = () => {
		const localIsDark = localStorage.getItem("theme");
		const sysTheme =
			window.matchMedia &&
			window.matchMedia("(prefers-color-scheme: dark)").matches;
		console.log(sysTheme);

		console.log(localIsDark);

		if (localIsDark) {
			if (localIsDark === "dark") {
				console.log("darke");
				setIsDark(true);
				setThemeClass(themes.dark);
				setMuiTheme(darkTheme);
			} else {
				console.log(muiTheme);
				setIsDark(false);
				setThemeClass(themes.light);
			}
		} else if (sysTheme) {
			setIsDark(true);
			setThemeClass(themes.dark);
		}
	};

	useEffect(() => {
		getSavedTheme();
	}, []);

	useEffect(() => {
		if (isDark !== "") {
			saveTheme();
		}
	}, [isDark]);

	return (
		<AppContext.Provider
			value={{ isDark, setIsDark, themeClass, mobile, setMobile }}
		>
			<ThemeProvider theme={muiTheme}>{children}</ThemeProvider>
		</AppContext.Provider>
	);
};
