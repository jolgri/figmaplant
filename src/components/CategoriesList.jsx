import './componentsStyle/categoriesList.scss';
// import useFetch from '../hooks/useFetch';
import DataHandler from '../utils/DataHandler';
import CategoryCard from './CategoryCard';
import useCategories from '../hooks/useCategories';

export default function CategoriesList() {

    // const dataurl = "https://gist.githubusercontent.com/jolgri/d6f12ecc5d8eead79b9b59bc06f9ce7b/raw/e4f06cce9ceae5c22c2de34fde462b17fe8ab266/data-category.json";

    // const { data: categories, loading, error } = useFetch(dataurl, 'categories', 'fileName')
    // console.log(categories); ( po ivedimo contex, use context nereikalingas fetch, nes jis idetas i context)
    const { categories, loading, error } = useCategories();

    return (
        <div className="categories-list">
            <DataHandler loading={loading} error={error}>
                {categories.map(elem => (
                    <CategoryCard imageSrc={elem.imageSrc} title={elem.title} key={elem.id} />
                ))}
            </DataHandler>
        </div>
    )
}