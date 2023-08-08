import styles from "./index.module.scss";

import { useGetNewSeriesQuery } from "../../services/streamberryAPI";

import FilmList from "../../components/FilmsList";
import Loading from "../../components/UI/Loading";



const Series = () => {

    const {data, isFetching} = useGetNewSeriesQuery(10);

    if(isFetching) return (<Loading/>)
    return(
        <section>
            <div className={styles.wrapper}>
            <FilmList data={data.docs}/>
            </div>
        </section>
    )
}

export default Series;