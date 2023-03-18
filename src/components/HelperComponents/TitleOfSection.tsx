import React from 'react';
import { color } from './globalCss';

export default function TitleOfSection(props: { text: string }) {
    const { text } = props;

    return (
        <h4 className={`
        mt-0 mb-2 text-2xl font-medium leading-tight text-primary
         w-full text-center ${color.backgroundLight}
         rounded-lg
         p-2
         `}>
            {text}
        </h4>

    )
}