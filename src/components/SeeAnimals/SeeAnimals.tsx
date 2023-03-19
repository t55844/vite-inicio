import React from 'react';
import { useAsync } from 'react-async-hook';
import CircularLoading from '../HelperComponents/CircularLoading';
import TitleOfSection from '../HelperComponents/TitleOfSection';
import Card from './Card';
const apiKey = import.meta.env.VITE_PLANT_API_KEY;

export default function SeeAnimals(props) {
    const data = async (key: string) => (await fetch(`https://perenual.com/api/species-list?page=1&key=${key}`)).json()
    const asyncPlant = useAsync(data, [apiKey])
    console.log(asyncPlant.result && asyncPlant.result)
    return (
        <>
            <TitleOfSection text='Sarch for the plants' />
            <div className={`flex flex-row flex-wrap justify-around`}>
                {asyncPlant.loading && <CircularLoading />}
                {asyncPlant.error && <div>Error: {asyncPlant.error.message}</div>}
                {asyncPlant.result &&
                    asyncPlant.result.data.map(plant =>
                    (<Card
                        imgSrc={plant.default_image.regular_url}
                        title={plant.common_name}
                        descriptions={`its scientific name is ${plant.scientific_name}, other names ${plant.other_name}, its cycle is ${plant.cycle}, watering ${plant.watering}, sunlight ${plant.sunlight}`}
                    />))
                }

            </div>
        </>
    )
}


/**
 * {
    "id": 1,
    "common_name": "European Silver Fir",
    "scientific_name": [
        "Abies alba"
    ],
    "other_name": [
        "Common Silver Fir"
    ],
    "cycle": "Perennial",
    "watering": "Frequent",
    "sunlight": [],
    "default_image": {
        "license": 45,
        "license_name": "Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0)",
        "license_url": "https://creativecommons.org/licenses/by-sa/3.0/deed.en",
        "original_url": "https://perenual.com/storage/species_image/1_abies_alba/og/1536px-Abies_alba_Skalit%C3%A9.jpg",
        "regular_url": "https://perenual.com/storage/species_image/1_abies_alba/regular/1536px-Abies_alba_Skalit%C3%A9.jpg",
        "medium_url": "https://perenual.com/storage/species_image/1_abies_alba/medium/1536px-Abies_alba_Skalit%C3%A9.jpg",
        "small_url": "https://perenual.com/storage/species_image/1_abies_alba/small/1536px-Abies_alba_Skalit%C3%A9.jpg",
        "thumbnail": "https://perenual.com/storage/species_image/1_abies_alba/thumbnail/1536px-Abies_alba_Skalit%C3%A9.jpg"
    }
}
 */