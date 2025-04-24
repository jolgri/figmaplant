import './componentsStyle/CategoryCard.scss';

export default function CategoryCard({ title, imageSrc }) {
    return (
        <>
            <div className="card">
                <img className="card-image" src={imageSrc} alt={title} />
                <h3 className="card-title">{title}</h3>
            </div>
        </>
    )
}