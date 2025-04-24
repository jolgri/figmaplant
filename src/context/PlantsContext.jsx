import { createContext } from "react";
import useFetch from "../hooks/useFetch";


const PlantsContext = createContext();

export function PlantsProvider({ children }) {
    const url = "https://gist.githubusercontent.com/jolgri/a9e2a8b996be5c3b8332d4d3543bc3da/raw/9071ba2c4dd5982550f35e6b502c6154ac4d3781/plant.json"

    const { data: plants, loading, error } = useFetch(url, 'plants', 'image');
    console.log(plants);
    const value = { plants, loading, error };
    console.log(value);

    return (
        <PlantsContext.Provider value={value}>
            {children}
        </PlantsContext.Provider>
    )
}
export default PlantsContext;