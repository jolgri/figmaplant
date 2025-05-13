
import SecondTitle from "../components/SecondTitle";
import PlantCardList from "../components/PlantCardList";
import { useState } from "react";
import '../components/componentsStyle/productsPage.scss';
import CategoryFilter from "../components/CategoryFilter";
import PriceFilter from "../components/PriceFilter";


export default function ProductsPage() {

    const [sortType, setSortType] = useState('deals');

    const [selectedCategories, setSelectedCategories] = useState([]);
    // rikiavimo pakeitimo 
    const handleSortChange = (event) => {
        setSortType(event.target.value);
    }
    // kategorijų pakeitimo 
    const handleCategoryChange = (categories) => {
        setSelectedCategories(categories || []);
    }


    return (
        <>
            <SecondTitle big='shop' small='Find the perfect plant for your space' />
            <div className="wrapper products-container">
                <aside className='aside'>
                    <CategoryFilter onCategoryChange={handleCategoryChange} />
                    <PriceFilter />
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

                    <PlantCardList filterType={sortType} selectedCategories={selectedCategories} />
                </div>
            </div>
        </>
    )
}