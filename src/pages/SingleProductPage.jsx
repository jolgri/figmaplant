import { useParams } from "react-router-dom";
import '../components/componentsStyle/singleProductPage.scss';
import usePlants from "../hooks/usePlants";
import DataHandler from "../utils/DataHandler";
import SecondTitle from '../components/SecondTitle';
import Title from '../components/Title'
import Button from '../components/Button'
import PlantCardList from '../components/PlantCardList'

export default function SingleProductPage() {
    // duomenų perdavimas per state
    // const location = useLocation();
    // const plantData = location.state;


    //duomenų perdavimas per context

    const { id } = useParams();
    const { plants, loading, error } = usePlants();
    const plantData = plants.find(p => p.id === parseInt(id));

    // if (!plantData) {
    //     return <div className="example"> Plant was not found.</div>
    // }
    return (
        <DataHandler
            loading={loading}
            error={error}
            noData={!plantData}
        >
            {
                plantData && (
                    <>
                        <SecondTitle big="Plant" small="Flowering Cactus" />
                        <div className="wrapper plant-content">

                            <div className="plant-content-img">
                                <img className="plant-img" src={plantData.imageSrc} alt={plantData.title} />
                                <img className="plant-img" src={plantData.imageSrc} alt={plantData.title} />
                                <img className="plant-img" src={plantData.imageSrc} alt={plantData.title} />
                                <img className="plant-img" src={plantData.imageSrc} alt={plantData.title} />
                            </div>

                            <div className="plant-content-data">
                                <h3 className="plant-content-title">{plantData.title}</h3>

                                {
                                    plantData.discount > 0 ? (
                                        <>
                                            <span className='plant-price'>
                                                ${plantData.discount ? (plantData.price * (1 - plantData.discount / 100)).toFixed(2) : plantData.price.toFixed(2)}
                                            </span>
                                            <span className='plant-price-red'>${plantData.price}</span>
                                        </>
                                    ) : (
                                        <div className='plant-price'>${plantData.price}</div>
                                    )
                                }


                                <p className="plant-content-description">{plantData.description}</p>
                                <Button className="green-btn" children="Add to Cart" />
                            </div>
                        </div>

                        <div className="light-bg">
                            <div className="wrapper example instruction">
                                Plant instruction
                            </div>
                        </div>

                        <div className="wrapper offer">
                            <Title text1="You'll love" text2="these too..." showLink={false} />
                            <PlantCardList filterType="deals" limit={4} />
                        </div>


                    </>)
            }

        </DataHandler>
    )
}