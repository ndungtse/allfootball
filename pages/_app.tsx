import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../lib/redux/store";
import { AppProvider } from "../helpers/contexts/AppContext";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<AppProvider>
				<Head>
					<title>Football</title>
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Component {...pageProps} />
			</AppProvider>
		</Provider>
	);
}

export default MyApp;
