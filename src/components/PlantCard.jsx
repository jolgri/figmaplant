import Button from './Button';
import './componentsStyle/plantCard.scss';
import Image from './Image';

export default function PlantCard({ imageSrc, title, price, discount }) {

    const discountedPrice = discount ? (price - (1 - discount / 100)).toFixed(2) : price.toFixed(2);
    return (
        <div className='plant-card'>
            <a>
                <div className='image-box'>
                    {
                        discount > 0 && (
                            <div className="discount-block">
                                <div>{discount} % </div>
                                <div>off</div>
                            </div>
                        )
                    }
                    {/* <img className='plant-img' src={imageSrc} alt={title} /> */}
                    <Image className='plant-img' src={imageSrc} alt={title} />

                </div>
                <div className='card-text'>
                    <h3 className='plant-title'>{title}</h3>

                    {
                        discount > 0 ? (
                            <>
                                <span className='plant-price'>${discountedPrice} </span>
                                <span className='plant-price-red'>${price}</span>
                            </>
                        ) : (
                            <div className='plant-price'>${price}</div>
                        )
                    }
                </div>
            </a>
            <Button className={"green-btn"}>
                Buy
            </Button>

        </div>

    )
}