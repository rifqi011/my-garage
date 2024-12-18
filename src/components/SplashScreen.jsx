import React, { useState, useEffect } from "react"
import Logo from "./../assets/img/logo.png"

const SplashScreen = () => {
	// Typing effect
	const [text, setText] = useState("")
	const [charIndex, setCharIndex] = useState(0)
	const word = "Welcome"

	useEffect(() => {
		if (charIndex < word.length) {
			const timer = setTimeout(() => {
				setText((prev) => prev + word[charIndex])
				setCharIndex(charIndex + 1)
			}, 150)
			return () => clearTimeout(timer)
		}
	}, [charIndex])

	return (
		<div className="h-screen bg-black flex flex-col gap-6 justify-center items-center overflow-hidden">
			<img src={Logo} alt="logo" className="w-24" />
			<h1 className="text-3xl font-bold flex items-center text-white">
				<span className="heading">{text}</span>
				<span className={`ml-1 ${charIndex < word.length ? "animate-blink" : ""}`}>|</span>
			</h1>
		</div>
	)
}

export default SplashScreen
