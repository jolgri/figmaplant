import '../components/componentsStyle/SectionDeals.scss';
import PlantCard from './PlantCard';
import PlantCardList from './PlantCardList';
import Title from "./Title";

export default function SectionDeals() {
    return (
        <section className="wrapper section-deals" >
            <Title text1={'Ferntastic'} text2={'Deals'} showLink={false} />
            <PlantCardList filterType={'deals'} limit={4} />
        </section>
    )
}