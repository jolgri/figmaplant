import './componentsStyle/sectionTestimonials.scss';
import TestimonialsList from './testimonialsList';
export default function SectionTestimonials() {
    return (
        <section className='light-bg'>
            <div className='wrapper test-section'>
                <h2 className='test-title'>Testimonials</h2>
                <p className='test-text'>Plant parents love us</p>
                <TestimonialsList />
            </div>

        </section>
    )
}