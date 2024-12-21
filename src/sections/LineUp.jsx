import { useState, useEffect } from "react"
import Lightbox from "../components/Lightbox"

const LineUp = () => {
	const [cars, setCars] = useState([])
	const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 })

	// Fetch data mobil dari JSON
	useEffect(() => {
		fetch("/src/data/CarsData.json") // Path yang sesuai dengan lokasi file JSON
			.then((response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`)
				}
				return response.json()
			})
			.then((data) => setCars(data))
			.catch((error) => console.error("Error fetching car data:", error))
	}, [])

	// Fungsi untuk membuka lightbox
	const openLightbox = (images, index) => {
		setLightbox({ isOpen: true, images, currentIndex: index })
	}

	// Fungsi untuk menutup lightbox
	const closeLightbox = () => {
		setLightbox({ isOpen: false, images: [], currentIndex: 0 })
	}

	// Fungsi untuk navigasi lightbox
	const navigateLightbox = (direction) => {
		setLightbox((prev) => {
			const newIndex = direction === "next" ? (prev.currentIndex + 1) % prev.images.length : (prev.currentIndex - 1 + prev.images.length) % prev.images.length
			return { ...prev, currentIndex: newIndex }
		})
    }
    
    // Fungsi agar tidak dapat discroll
    useEffect(() => {
        if (lightbox.isOpen) {
            document.body.classList.add("overflow-hidden")
        } else {
            document.body.classList.remove("overflow-hidden")
        }

        return () => document.body.classList.remove("overflow-hidden")
    }, [lightbox.isOpen])

	return (
		<section id="line-up" className="section flex flex-col gap-8 items-center py-8 container md:gap-16">
			<h1 className="headline text-5xl font-Cormorant">My Collections</h1>

			<div className="flex flex-col gap-16 md:gap-24">
				{cars.map((car, carIndex) => (
					<div key={carIndex} className="flex flex-col gap-4">
						{/* Section Atas */}
						<div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
							<div className="flex flex-col gap-4 lg:w-[30%]">
								<h3 className="text-xl uppercase font-Cormorant">{car.brand}</h3>
								<h2 className="text-3xl font-medium">{car.type}</h2>
								<p className="text-xl">{car.description1}</p>
							</div>
							<div className="lg:w-[70%]">
								<img loading="lazy" className="object-cover h-72 sm:h-[400px] md:min-h-[500px] cursor-pointer" src={car.images[0]} alt={car.type} onClick={() => openLightbox(car.images, 0)} />
							</div>
						</div>

						{/* Section Bawah */}
						<div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-12">
							<div className="flex gap-4 w-full max-w-screen overflow-hidden lg:w-[70%]">
								{car.images.slice(1).map((image, imageIndex) => (
									<img key={imageIndex} loading="lazy" className="flex-1 object-cover w-1/2 h-[300px] sm:h-[400px] md:min-h-[400px] cursor-pointer" src={image} alt={`${car.type} View ${imageIndex + 2}`} onClick={() => openLightbox(car.images, imageIndex + 1)} />
								))}
							</div>
							<div className="flex flex-col gap-2 lg:w-[30%]">
								<h2 className="text-2xl font-medium">{car.tagline}</h2>
								<p className="text-xl">{car.description2}</p>
								<div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4">
									{[
										{ label: "Engine", value: car.engine },
										{ label: "Power", value: car.power },
										{ label: "Top Speed", value: car.topSpeed },
										{ label: "0-100 KM/H", value: car.acceleration },
									].map((spec, specIndex) => (
										<div key={specIndex} className="flex flex-col justify-center items-center">
											<h3 className="text-3xl lg:text-2xl">{spec.value}</h3>
											<p>{spec.label}</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Lightbox Component */}
			{lightbox.isOpen && <Lightbox images={lightbox.images} currentIndex={lightbox.currentIndex} onClose={closeLightbox} onNext={() => navigateLightbox("next")} onPrev={() => navigateLightbox("prev")} />}
		</section>
	)
}

export default LineUp
