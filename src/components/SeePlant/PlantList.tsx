import React from "react";
import { PlantModel } from "../../model/Plant/PlantModel";
import Card from "./Card";

export default function PlantList(props: { plants: PlantModel[] }) {
    const { plants } = props
    console.log(plants)
    return (
        <>
            <div className={`flex flex-row flex-wrap justify-around`}>
                {plants.map(plant =>
                (<Card
                    imgSrc={plant.default_image !== null ? plant.default_image.regular_url : ''}
                    title={plant.common_name}
                    descriptions={`its scientific name is ${plant.scientific_name}, other names ${plant.other_name}, its cycle is ${plant.cycle}, watering ${plant.watering}, sunlight ${plant.sunlight}`}
                />))
                }

            </div>
        </>
    )
}