import AwesomeDebouncePromise from "awesome-debounce-promise";
import { useState } from "react";
import { useAsyncAbortable } from "react-async-hook";
import useConstant from "use-constant";
import { PlantModel } from "../../model/Plant/PlantModel";
const apiKey = import.meta.env.VITE_PLANT_API_KEY;

const searchPlant = async (
    text: string,
    abortSignal?: AbortSignal
): Promise<PlantModel[]> => {
    const result = await fetch(
        `https://perenual.com/api/species-list?key=${apiKey}&q=${encodeURIComponent(text)}`,
        {
            signal: abortSignal,
        }
    );
    if (result.status !== 200) {
        console.log(result.status)
        throw new Error('bad status = ' + result.status);
    }
    const json = await result.json();
    return json.data;
};

export const useSearchPlant = () => {
    // Handle the input text state
    const [inputText, setInputText] = useState('');

    // Debounce the original search async function
    const debouncedSearchPlant = useConstant(() =>
        AwesomeDebouncePromise(searchPlant, 300)
    );

    const search = useAsyncAbortable(
        async (abortSignal, text) => {
            // If the input is empty, return nothing immediately (without the debouncing delay!)
            if (text.length === 0) {
                return [];
            }
            // Else we use the debounced api
            else {
                return debouncedSearchPlant(text, abortSignal);
            }
        },
        // Ensure a new request is made everytime the text changes (even if it's debounced)
        [inputText]
    );
    // Return everything needed for the hook consumer
    return {
        inputText,
        setInputText,
        search,
    };
};