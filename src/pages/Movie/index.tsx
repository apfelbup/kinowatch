import styles from "./index.module.scss";

import MovieHeader from "./components/MovieHeader";
import MovieInfo from "./components/MovieInfo";




const Movie = () => {

    return(
        <section className={styles.movie}>
                <MovieHeader/>
            <div className={styles.wrapper}>
                <MovieInfo/>
            </div>
        </section>
    )
}

export default Movie;