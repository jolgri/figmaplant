import DataHandler from '../utils/DataHandler';
import './componentsStyle/testimonialsList.scss';
import useFetch from '../hooks/useFetch';
import TestimonialsCard from './TestimonialsCard';

export default function TestimonialsList() {



    const dataurlClients = "https://gist.githubusercontent.com/jolgri/153d29435237f2856cbe0e2927984e46/raw/f4514a734d02f6fa3e2aeefa42e69ab3b480a883/clients.json";

    const { data: testimonials, loading, error } = useFetch(dataurlClients, 'clients', 'img');
    console.log(testimonials);

    return (
        <div className='test-list'>
            <DataHandler loading={loading} error={error}>
                {
                    testimonials.map(card => (
                        <TestimonialsCard
                            key={card.id}
                            imageSrc={card.imageSrc}
                            name={card.name}
                            text={card.text}
                            rating={card.rating} />

                    ))
                }
            </DataHandler >
        </div >
    )
}