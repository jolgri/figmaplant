import { Link } from 'react-router-dom';
import './componentsStyle/CategoryCard.scss';

export default function CategoryCard({ title, imageSrc, categoryId }) {
    return (
        <>
            <Link to={`/products?category=${encodeURIComponent(categoryId)}`} className="card">
                <img className="card-image" src={imageSrc} alt={title} />
                <h3 className="card-title">{title}</h3>
            </Link>
            {/* <div className="card">
                <img className="card-image" src={imageSrc} alt={title} />
                <h3 className="card-title">{title}</h3>
            </div> */}
        </>
    )
}