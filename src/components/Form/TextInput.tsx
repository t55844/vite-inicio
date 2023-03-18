import React from "react";
import { useFormContext } from "react-hook-form";

interface ITextInputProps {
    label: string
    placeholder: string
    type: string
    registerName: string
}

export default function TextInput(props: ITextInputProps) {
    const { label, placeholder, type, registerName } = props
    const { register } = useFormContext()

    return (
        <div className="mb-4 w-full">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={label}>
                {label}
            </label>
            <input
                {...register(registerName)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={e => e.preventDefault()}
                id={label} type={type} placeholder={placeholder} />
        </div>
    )
}