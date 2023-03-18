import React from 'react';
import { color } from './globalCss';

interface IButtonForm {
    handleClick?<Type>(data: Type): void,
    displayText: string
    type: "button" | "submit" | "reset"
}

export default function ButtonForm(props: IButtonForm) {

    const { handleClick, displayText, type } = props

    return (
        <button
            onClick={handleClick} type={type}
            className={`${color.background} ${color.hover}  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`
            } >
            {displayText}
        </button >
    )
}

