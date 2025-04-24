import './componentsStyle/SectionHot.scss';
import PlantCardList from './PlantCardList';
import Title from './Title';

export default function SectionHot() {
    return (
        <section className='light-bg'>
            <div className="wrapper">
                <Title text1={"Hottest"} text2={"Plants"} showLink={true} />
                <PlantCardList filterType={'hot'} limit={8} />
            </div>

        </section>
    )
}