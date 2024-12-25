import VideoBackground from "../components/VideoBackground"
import { useState, useEffect } from "react"
import ChevronIcon from "./../assets/icon/chevron-right.svg"

const Home = ({ onVideoLoaded }) => {
	const [showContent, setShowContent] = useState(false)

	// Memunculkan elemen setelah 1 detik
	useEffect(() => {
		const timer = setTimeout(() => {
			setShowContent(true)
		}, 1000)

		return () => clearTimeout(timer)
	}, [])

	return (
		<section id="home" className="w-full h-screen overflow-hidden flex items-center justify-center">
			<VideoBackground onLoaded={onVideoLoaded} />

			{showContent && (
				<div href="#line-up" className="text-center text-white mb-8 opacity-0 animate-fadeInDown flex flex-col gap-6" style={{ animationDelay: "0.5s" }}>
					<h1 className="text-5xl font-bold">A Garage Full of Dreams.</h1>
					<p>Discover a world of speed and luxury in this curated collection of exotic cars.</p>

					<a href="#line-up" className="mt-4 text-white flex justify-center">
						<p className="border-b-[1px]">Explore my collections</p>
						<img src={ChevronIcon} alt="" className="w-6" />
					</a>
				</div>
			)}
		</section>
	)
}

export default Home
