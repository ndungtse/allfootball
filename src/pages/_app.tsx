import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import { AppProvider } from "../components/constants/contexts/AppContext";
import Head from "next/head";
import { Auth0Provider } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
	const [location, setLocation] = useState<any>(null);

	useEffect(() => {
		setLocation(window.location.origin);
	} , []);
	useEffect(() => {
		console.log(window.location.origin);
	} , [location]);
	
	return (
		<> {location && (
		<Auth0Provider
			domain="dev-carimount.eu.auth0.com"
			clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID || ''}
			redirectUri={location}
		>
		<Provider store={store}>
			<AppProvider>
				<Head>
					<title>Football</title>
					<link rel="icon" href="/SVG/logo.svg" />
				</Head>
				<Component {...pageProps} />
				<Analytics />
			</AppProvider>
		</Provider>
		</Auth0Provider>
		)}
		</>
	);
}

export default MyApp;
