import styles from "./index.module.scss";
import FilmList from "../../components/FilmsList";
import Loading from "../../components/UI/Loading";
import { useGetCartoonsQuery} from "../../services/streamberryAPI";




const Cartoons = () => {
    const {data, isFetching} = useGetCartoonsQuery(10);

    if(isFetching) return (<Loading/>)
    return(
        <section>
            <FilmList data={data.docs}/>
        </section>
    )
}

export default Cartoons;