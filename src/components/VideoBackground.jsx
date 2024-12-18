import Video from "./../assets/video/background-garage - Made with Clipchamp.webm"

const VideoBackground = () => {
	return <video loop autoPlay muted src={Video} className="w-full h-screen absolute -z-10 top-0 left-0 object-cover"></video>
}

export default VideoBackground
