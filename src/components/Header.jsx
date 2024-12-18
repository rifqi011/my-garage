import { useEffect, useState } from "react"
import Logo from "./../assets/img/logo.png"

const Header = () => {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    const handleScroll = () => {
        if (window.scrollY > lastScrollY) {
            setIsVisible(false)
        } else {
            setIsVisible(true)
        }
        setLastScrollY(window.scrollY)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll) 
    }, [lastScrollY])

	return (
        <header className={`flex justify-center w-full items-center bg-black p-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-80 fixed top-0 left-0 transition-all ease-in duration-200 z-10 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
			<img src={Logo} alt="" className="w-12" />
		</header>
	)
}

export default Header