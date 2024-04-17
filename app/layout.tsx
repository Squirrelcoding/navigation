import {NextFont} from "next/dist/compiled/@next/font";
import {Metadata} from "next";
import {Inter} from "next/font/google";

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
const inter:NextFont = Inter({subsets: ["latin"]});





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



function Page({children}:Readonly<{children:React.ReactNode}>) {
	return <>
		<div className="auto-margins page">
			{children}
		</div>
	</>;
}





export default RootLayout;

export {metadata, Page};