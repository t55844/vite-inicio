import React, { ReactElement } from "react";

interface IDivFlexProps {
    direction: "row" | "row-reverse" | "col" | "col-reverse",
    width: "full" | "1/2" | "1/4" | "11/12",
    children?: ReactElement[]
}


export default function DIvFlex(props: IDivFlexProps) {
    const { direction, children, width } = props
    return (
        <div className={`
            flex  flex-wrap justify-around items-center
            mb-0 mt-0 mr-auto ml-auto p-5
            w-full flex-col  md:w-${width} md:flex-${direction}
        `}>
            {(children as ReactElement[]).map((child: ReactElement) => child)}        </div>
    )
}