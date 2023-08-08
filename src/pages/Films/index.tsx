import styles from "./index.module.scss";
import FilmList from "../../components/FilmsList";
import Loading from "../../components/UI/Loading";
import { useGetNewFilmsQuery } from "../../services/streamberryAPI";




const Films = () => {
    const {data, isFetching} = useGetNewFilmsQuery(10);

    if(isFetching) return (<Loading/>)
    return(
        <section className={styles.films}>
            <div className={styles.wrapper}>
            <FilmList data={data.docs}/>
            </div>
        </section>
    )
}

export default Films;