import './componentsStyle/PriceFilter.scss';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import usePlants from '../hooks/usePlants';
import { useEffect, useState } from 'react';


const sliderStyles = {
    rail: {
        backgroundColor: '#e0e0e0',
        height: '0.5rem',
        borderRadius: '0.25rem',
    },
    track: {
        backgroundColor: 'var(--green)',
        height: '0.5rem',
        borderRadius: '0.25rem',
    },
    handle: {
        border: '2px solid var(--green)',
        backgroundColor: 'var(--white)',
        width: '1.2rem',
        height: '1.2rem',
        marginTop: '-0.4rem',
        boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    },
};

export default function PriceFilter({ onPriceChange }) {

    const { plants } = usePlants();
    const [priceRange, setPriceRange] = useState([0, Infinity]);
    const [maxPrice, setMaxPrice] = useState(Infinity);

    useEffect(_ => {
        if (plants.length > 0) {
            const highestPrice = plants.reduce((max, plant) => Math.max(max, plant.price), 0);
            setMaxPrice(highestPrice);
            setPriceRange([0, highestPrice]);

        }
    }, [plants])

    const handlePriceChange = value => {
        setPriceRange(value);
        onPriceChange(value);
    }

    return (
        <div className='price-filter'>
            <details>
                <summary>
                    By price
                </summary>
                <div className='price-dropdown'>
                    <label htmlFor="">Price range:
                        $ {priceRange[0]} - $ {priceRange[1] === Infinity ? '∞' : priceRange[1]}
                    </label>
                    <Slider range min={0} max={maxPrice} style={sliderStyles} value={priceRange} onChange={handlePriceChange} />
                </div>
            </details>

        </div>
    )
}