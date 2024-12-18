import React, { useState, useEffect } from "react"
import SplashScreen from "./components/SplashScreen"
import Header from "./components/Header"
import Home from "./sections/Home"
import LineUp from "./sections/LineUp"

const App = () => {
	const [showSplash, setShowSplash] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowSplash(false)
		}, 3000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<>
			{showSplash ? (
				<SplashScreen />
			) : (
				<>
					<Header />

					<Home />

					<LineUp />
				</>
			)}
		</>
	)
}

export default App