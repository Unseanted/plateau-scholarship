import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SlidingImages() {
	const images = [
		"/images/student1.jpg",
		"/images/student2.jpg",
		"/images/student3.jpg"
	];
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative w-full flex justify-center my-6">
            <div className="relative w-[600px] h-[300px] overflow-hidden rounded-lg shadow-lg">
                <Image 
                    src={images[currentImage]} 
                    alt="Student Image"
                    width={600}  
                    height={300}
                    objectFit="cover" 
                    className="transition-transform duration-1000 ease-in-out rounded-lg"
                />
            </div>
        </div>
        );
}
