import PacmanLoader from "react-spinners/PacmanLoader";

export default function DataHandler({ loading, error, children }) {
    if (loading) {
        return (
            <PacmanLoader
                color="#50806B"
                margin={2} />)
    }
    if (error) {
        return (
            <>Error: {error}</>
        )
    }
    return (children);

}