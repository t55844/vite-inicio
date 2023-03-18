import React, { ReactElement } from "react";

interface IDivFlexProps {
    direction: "row" | "row-reverse" | "col" | "col-reverse",

}


export default function DIvFlex(props: IDivFlexProps) {
    const { direction } = props
    return (
        <div className={`
            flex flex-${direction} flex--wrap justify-around items-center
            mb-0 mt-0 mr-auto ml-auto
            w-11/12
        `}>
            {props.children.map((child: ReactElement) => child)}        </div>
    )
}