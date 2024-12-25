import React, { useEffect, useRef } from "react"
import Video from "./../assets/video/background-garage - Made with Clipchamp.webm"

const VideoBackground = ({ onLoaded }) => {
	const videoRef = useRef(null)

	useEffect(() => {
		const handleLoadedData = () => {
			if (onLoaded) {
				onLoaded()
			}
		}

		const videoElement = videoRef.current
		videoElement.addEventListener("loadeddata", handleLoadedData)

		return () => {
			videoElement.removeEventListener("loadeddata", handleLoadedData)
		}
	}, [onLoaded])

	return <video ref={videoRef} loop autoPlay muted src={Video} className="w-full h-screen absolute -z-10 top-0 left-0 object-cover"></video>
}

export default VideoBackground
