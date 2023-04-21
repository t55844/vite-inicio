import React from "react";

export default function CarouselItem({ children }) {
    return (
        <div className="w-full h-full flex-shrink-0 flex items-center justify-center">
            {children}
        </div>
    );
};