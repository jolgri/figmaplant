import { createContext } from "react";
import useFetch from "../hooks/useFetch";


const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {

    const dataurl = "https://gist.githubusercontent.com/jolgri/d6f12ecc5d8eead79b9b59bc06f9ce7b/raw/e4f06cce9ceae5c22c2de34fde462b17fe8ab266/data-category.json";

    const { data: categories, loading, error } = useFetch(dataurl, 'categories', 'fileName')
    console.log(categories);

    const value = { categories, loading, error };


    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}
export default CategoriesContext;