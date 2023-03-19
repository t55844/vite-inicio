import React from "react";
import { color } from "../../HelperComponents/globalCss";
import { Link as RLink } from 'react-router-dom';

export default function Link(props: { name: string, url: string }) {
    const { name, url } = props;

    return (

        <RLink
            className={`block mt-4 lg:inline-block lg:mt-0 
        ${color.text} ${color.textHover} 
        mr-4
        `}
            to={url}>
            {name}
        </RLink>

    )
}