import React from "react";

interface ICardProps {
    descriptions: string
    title: string
    imgSrc: string
}


export default function Card(props: ICardProps) {
    const { descriptions, title, imgSrc } = props

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg md:m-5 m-2">
            <img className="w-full h-2/3" src={imgSrc} alt={title} />
            <div className="h-1/3 px-6 py-4 bg-zinc-700">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className=" text-base">
                    {descriptions}
                </p>
            </div>
        </div>
    )
}