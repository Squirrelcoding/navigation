export default function Page({children}:Readonly<{children:React.ReactNode}>) {
	return <>
		<div className="auto-margins page">
			{children}
		</div>
	</>;
}