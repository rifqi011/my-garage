import { useState, useEffect } from "react"

const LineUp = () => {
	const [cars, setCars] = useState([])

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

	return (
		<section id="line-up" className="section flex flex-col gap-8 items-center py-8 container md:gap-16">
			<h1 className="headline text-5xl font-Cormorant">My Collections</h1>

			<div className="flex flex-col gap-16 md:gap-24">
				{cars.map((car, index) => (
					<div key={index} className="flex flex-col gap-4">
						{/* Section Atas */}
						<div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
							<div className="flex flex-col gap-4 lg:w-[30%]">
								<h3 className="text-xl uppercase font-Cormorant">{car.brand}</h3>
								<h2 className="text-3xl font-medium">{car.type}</h2>
								<p className="text-xl">{car.description1}</p>
							</div>
							<div className="lg:w-[70%]">
								<img loading="lazy" className="object-cover h-72 sm:h-[400px] md:min-h-[500px]" src={car.images[0]} alt={car.type} />
							</div>
						</div>

						{/* Section Bawah */}
						<div className="flex flex-col gap-4 lg:flex-row-reverse lg:gap-12">
							<div className="flex gap-4 w-full max-w-screen overflow-hidden lg:w-[70%]">
								{car.images.slice(1).map((image, index) => (
									<img key={index} loading="lazy" className="flex-1 object-cover w-1/2 h-[300px] sm:h-[400px] md:min-h-[400px]" src={image} alt={`${car.type} View ${index + 2}`} />
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
									].map((spec, index) => (
										<div key={index} className="flex flex-col justify-center items-center">
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
		</section>
	)
}

export default LineUp
