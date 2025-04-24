import './componentsStyle/bestList.scss';
import useFetch from '../hooks/useFetch';
import BestCard from './BestCard';
import DataHandler from '../utils/DataHandler';


export default function BestList() {

    const dataurlbestCards = "https://gist.githubusercontent.com/jolgri/7744d198eaeb712a6c4a6795a565af2e/raw/dfd4f7ee4117c4252e6865c7508e250f65140e47/bestSelling.json";

    const { data: bestCards, loading, error } = useFetch(dataurlbestCards, 'bestSelling', 'fileName');
    console.log(bestCards);

    return (

        <div className="bestList">
            <DataHandler>
                {bestCards.map(card => (

                    <BestCard imageSrc={card.imageSrc} title={card.title} key={card.id} />
                ))}


            </DataHandler>
        </div>
    )
}