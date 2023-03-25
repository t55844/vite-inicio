import React from "react";
import { PlantModel } from "../../model/Plant/PlantModel";
import CircularLoading from "../HelperComponents/CircularLoading";
import WarnigTextBox from "../HelperComponents/WarnigTextBox";
import PlantList from "./PlantList";
import { useSearchPlant } from "./useSearch";

export default function Search() {
    const { inputText, setInputText, search } = useSearchPlant();
    console.log(search)
    return (
        <div>
            <input
                type="search"
                id="default-search"
                value={inputText} onChange={e => setInputText(e.target.value)}
                className="block w-full p-4 pl-10 text-sm  border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
            <div>
                {search.loading && <CircularLoading />}
                {search.error && < WarnigTextBox title="Error on the search please tray again latel" description={search.error.message} />}
                {search.result && (search.result as PlantModel[]) && (
                    <PlantList plants={search.result} />
                )}
            </div>

        </div>
    );
};