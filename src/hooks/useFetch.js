import { useEffect, useState } from "react";

export default function useFetch(url, folder, imgKey){

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {

        const fetchData = async() => {
            setLoading(true);
            setError(null);
            try{ 
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error('Failed to retrieve from API'); 
                } 
                const jsonData = await response.json();
                const dataWithImage = await Promise.all(
                    jsonData.map(async elem => {
                        let imageSrc = "";
                        try{
                            imageSrc = new URL(`../assets/${folder}/${elem[imgKey]}`, import.meta.url).href;
                        }
                        catch {
                            imageSrc = new URL(`../assets/${folder}/empty.svg`, import.meta.url).href;
                        }
                        return {...elem,  imageSrc};
                    })
                )
                setData(dataWithImage);
                console.log(jsonData);

            } catch (error){
                setError(error.messages);
                console.log('Klaida', error)
            }
            finally {
                setLoading(false);
            }
        };

        fetchData();

    }, [url, folder, imgKey]);

    return {data, loading, error};
}