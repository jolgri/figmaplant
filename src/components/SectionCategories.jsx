import Title from './Title.jsx'

import CategoriesList from "./CategoriesList.jsx"

export default function SectionCategories() {
    return (
        <section className="wrapper section-category">
            <Title text1='Shop' text2='by Category' showLink={false} />
            <CategoriesList />
        </section>
    )
}