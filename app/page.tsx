import { NextFont } from "next/dist/compiled/@next/font";
import { Inter } from "next/font/google";

const inter: NextFont = Inter({ subsets: ["latin"] });

export default function ({ children }: Readonly<{ children: React.ReactNode }>) {
	return <>
		<body className={inter.className}>
			<header className="auto-margins">
				<h1 className="auto-margins">Navigation</h1>
				<img src="./favicon.ico" alt="[Website icon.]" id="badge" />
			</header>
			<main className="auto-margins">{children}</main>
		</body>
	</>;
}