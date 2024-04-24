import {Metadata, Viewport} from "next";
import {NextFont} from "next/dist/compiled/@next/font";
import {Inter} from "next/font/google";


import Page from "../components/page";
import "./globals.css";
import "./site.css";





const metadata:Metadata = {
	applicationName: "Navigation",
	description: "A navigation app for a school.",
	viewport: "initial-scale=1, height=device-height, width=device-width",
	authors: [
		{name: "Calin Z. Baenen", url: "https://www.github.com/CalinZBaenen"},
		{name: "Carlos R. Chavez", url: "https://www.github.com/Squirrelcoding"}
	],
	icons: {
		shortcut: "./favicon.ico",
		icon: "./favicon.ico"
	},
	title: "Navigation"
};
const viewport:Viewport = {
	height: "device-height",
	width: "device-width"
};
const inter:NextFont = Inter({subsets: ["latin"]});




function HomeLayout() {
	return <>
		<Page>
			<h2>How To Use</h2>
			<p>
				To use the <i>Navigation</i> application, simply input your current location
				then your destination.
			</p>
		</Page>
		
		<Page>
			<h2>Input</h2>
		</Page>
	</>
}



function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
	return <>
		<html lang="en-US">
			<head>
				<meta httpEquiv="Content-Type" charSet="UTF-8" content="text/html; charset=UTF-8" />
			</head>
			<body className={inter.className}>
				<header className="auto-margins">
					<h1 className="auto-margins">Navigation</h1>
					<img src="./favicon.ico" alt="[Website icon.]" id="badge" />
				</header>
				<main className="auto-margins">{children}</main>
			</body>
		</html>
	</>;
}





export default RootLayout;

export {
	HomeLayout,
	metadata
};