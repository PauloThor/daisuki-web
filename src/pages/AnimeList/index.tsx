import { useParams } from "react-router";
import Header from "../../components/Header"

interface Props {
    request: "genre" | "anime" | "search"
    search?: boolean
}

const AnimeList = ({request, search=false}: Props) => {
    const params = useParams()
    if (request === 'genre') {

    }
    return (
        <>
        <Header/>
        </>
    )
}

export default AnimeList;
