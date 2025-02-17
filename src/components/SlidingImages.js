import { useEffect, useState } from 'react';

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
        <div className="relative w-full h-96 flex justify-center items-center overflow-hidden">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    alt="Student Image"
                />
            ))}
        </div>
    );
}
