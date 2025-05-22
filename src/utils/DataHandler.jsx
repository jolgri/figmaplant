import PacmanLoader from "react-spinners/PacmanLoader";

export default function DataHandler({ loading, error, children, noData }) {
    if (loading) {
        return (
            <PacmanLoader
                color="#50806B"
                margin={2} />)
    }
    if (noData) {
        return (
            <div className="example">Plant not found</div>)
    }
    if (error) {
        return (
            <>Error: {error}</>
        )
    }
    return (children);

}