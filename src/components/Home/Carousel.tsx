import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const zincColors = {
    zincGray50: "#F9FAFB",
    zincGray100: "#F3F4F6",
    zincGray200: "#E5E7EB",
    zincGray300: "#D1D5DB",
    zincGray400: "#9CA3AF",
    zincGray500: "#6B7280",
    zincGray600: "#4B5563",
    zincGray700: "#374151",
    zincGray800: "#1F2937",
    zincGray900: "#111827",
};

const Carousel = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        if (currentIndex === 0) {
            setCurrentIndex(children.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex === children.length - 1) {
            setCurrentIndex(0);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className="relative">
            <div className="flex justify-between items-center mb-2">
                <ChevronLeftIcon
                    className="h-6 w-6 cursor-pointer"
                    onClick={handlePrev}
                />
                <ChevronRightIcon
                    className="h-6 w-6 cursor-pointer"
                    onClick={handleNext}
                />
            </div>
            <div className="overflow-hidden relative">
                <div
                    className="flex transition-all ease-in-out duration-500"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};


export default Carousel;
