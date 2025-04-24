import Button from './Button';
import './componentsStyle/plantCard.scss';

export default function PlantCard({ imageSrc, title, price }) {
    return (
        <div className='plant-card'>
            <a>
                <div className='image-box'>
                    <img className='plant-img' src={imageSrc} alt={title} />

                </div>
                <div className='card-text'>
                    <h3 className='plant-title'>{title}</h3>
                    <div className='plant-price'>{price} EUR</div>
                </div>
            </a>
            <Button className={"green-btn"}>
                Buy
            </Button>

        </div>

    )
}