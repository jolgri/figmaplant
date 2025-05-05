import Hero from "../components/Hero";
import SectionBest from "../components/SectionBest";
import SectionCategories from "../components/SectionCategories";
import SectionDeals from "../components/SectionDeals";
import SectionHot from "../components/SectionHot";
import SectionTestimonials from "../components/SectionTestimonials";

export default function HomePage() {
    return (
        <>
            <Hero />
            <SectionCategories />
            <SectionBest />
            <SectionHot />
            <SectionDeals />
            <SectionTestimonials />
        </>
    )
}