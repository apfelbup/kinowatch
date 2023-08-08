import styles from "./index.module.scss";

import { useGetNewFilmsQuery, useGetNewSeriesQuery } from "../../services/streamberryAPI";

import Catalog from "../../components/Catalog";
import Loading from "../../components/UI/Loading";




const Home = () => {

    const {data, isFetching} = useGetNewSeriesQuery(10);
    const filmsData = useGetNewFilmsQuery(10);

    if(isFetching) return <Loading/>
    return(
        <div className={styles.home}>
            <Catalog data={data?.docs} title="Новинки года"/>
            <Catalog data={filmsData?.data?.docs} title="Драма"/>
        </div>
    )
}

export default Home;