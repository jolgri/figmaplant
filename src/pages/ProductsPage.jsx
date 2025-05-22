
import SecondTitle from "../components/SecondTitle";
import PlantCardList from "../components/PlantCardList";
import { useEffect, useState } from "react";
import '../components/componentsStyle/productsPage.scss';
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";
import { useSearchParams } from "react-router-dom";


export default function ProductsPage() {

    const [sortType, setSortType] = useState('deals');

    const [selectedCategories, setSelectedCategories] = useState([]);

    const [priceRange, setPriceRange] = useState([0, Infinity]);

    //Nuskaito parametrus iš URL dėl category filtrų
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(_ => {
        const category = searchParams.get('category');
        if (category && !selectedCategories.includes(category)) {
            setSelectedCategories([Number(category)]);
        }
    }, [searchParams])

    // rikiavimo pakeitimo 
    const handleSortChange = (event) => {
        setSortType(event.target.value);
    }
    // kategorijų pakeitimo 
    const handleCategoryChange = (categories) => {
        setSelectedCategories(categories || []);
        setSearchParams({ category: categories[0] || '' });
    }
    // KAINOS ATNAUJINIMAI
    const handlePriceChange = range => {
        setPriceRange(range);
    }
    return (
        <>
            <SecondTitle big='shop' small='Find the perfect plant for your space' />
            <div className="wrapper products-container">
                <aside className='aside'>
                    <CategoryFilter onCategoryChange={handleCategoryChange} selectedCategories={selectedCategories} />
                    <PriceFilter onPriceChange={handlePriceChange} />
                </aside>
                <div className='cards-container'>

                    <div className="sort-block">
                        <label htmlFor='sort'>Sort by</label>
                        <select id='sort' className="sort" value={sortType} onChange={handleSortChange}>
                            {/* <option value="default">Default</option> */}
                            <option value="hot">Popular</option>
                            <option value="deals">Biggest discount</option>
                            <option value="price-high">Price(high to low)</option>
                            <option value="price-low">Price(low to high)</option>

                        </select>
                    </div>

                    <PlantCardList
                        filterType={sortType}
                        selectedCategories={selectedCategories}
                        priceRange={priceRange} />
                </div>
            </div>
        </>
    )
}