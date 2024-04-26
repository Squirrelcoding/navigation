import { NextFont } from "next/dist/compiled/@next/font";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter: NextFont = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	applicationName: "Navigation",
	description: "A navigation app for a school.",
	authors: [
		{ name: "Calin Z. Baenen", url: "https://www.github.com/CalinZBaenen" },
		{ name: "Carlos A. Rosiles Chavez", url: "https://www.github.com/Squirrelcoding" }
	],
	icons: {
		shortcut: "./favicon.ico",
		icon: "./favicon.ico"
	},
	title: "Navigation"
};

export const viewport: Viewport = {
	initialScale: 1,
	height: "device-height",
	width: "device-width",
}


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}