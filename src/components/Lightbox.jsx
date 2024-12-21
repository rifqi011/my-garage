import ChevronRight from "../assets/icon/chevron-right.svg"
import ChevronLeft from "../assets/icon/chevron-left.svg"
import Times from "../assets/icon/times.svg"

const Lightbox = ({ images, currentIndex, onClose, onNext, onPrev }) => {
	return (
		<div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
			<button className="absolute top-4 right-4 w-16" onClick={onClose}>
				<img src={Times} alt="Close" />
            </button>
            
			<div className="flex items-center justify-center">
				<button className="w-12 left-1 absolute" onClick={onPrev}>
					<img src={ChevronLeft} alt="Previous" />
                </button>
                
				<img className="max-w-[90%] w-[80%] object-contain" src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
				
                <button className="w-12 right-1 absolute" onClick={onNext}>
					<img src={ChevronRight} alt="Next" />
				</button>
			</div>
		</div>
	)
}

export default Lightbox
