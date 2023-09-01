import styles from "./index.module.scss";

import MovieHeader from "./components/MovieHeader";
import MovieInfo from "./components/MovieInfo";
import { useGetFilmByIdQuery } from "../../services/streamberryAPI";
import { useParams } from "react-router";
import Loading from "../../components/UI/Loading";




const Movie = () => {
    const {id} = useParams();

    const {data, isLoading} = useGetFilmByIdQuery(id);

    if(isLoading) return <Loading/>
    return(
        <section className={styles.movie}>
                <MovieHeader data={data!.docs}/>
            <div className={styles.wrapper}>
                <MovieInfo data={data!.docs}/>
            </div>
        </section>
    )
}

export default Movie;