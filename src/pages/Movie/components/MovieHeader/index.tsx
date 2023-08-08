import styles from "./index.module.scss";

import {AiFillCaretRight} from 'react-icons/ai';
import { useAppSelector } from "../../../../hooks/reduxhooks"; 
import { convertHoursToMinutes } from "../../../../utils/helpers/convertHoursToMinutes/convertHoursToMinutes";
import { convertMovieType } from "../../../../utils/helpers/convertMovieType/convertMovieType";

import Backdrop from "../../../../components/Backdrop";
import Genres from "../../../../components/Genres";
import Rating from "../../../../components/Rating";




const MovieHeader = () => {
    const { id, year, name, type, rating, movieLength, backdrop, logo, genres, countries } = useAppSelector(state => state.movieReducer.activeAccordion.movie);
    const movieType = convertMovieType(type);
    const {hours, minutes} = convertHoursToMinutes(movieLength);

    return(
            <header className={styles.movieHeader}>
                <div className={styles.wrapper}>
                <div className={styles.info}>
                {logo?.url ? <img className={styles.logo} src={`${logo.url}`} alt={name} /> : <span className={styles.logo}>{name && name}</span>}
                    <Genres genres={genres}/>
                    <div className={styles.details}>
                        <Rating rating={rating}/>
                        <span className={styles.type}>{movieType}</span>
                        {movieLength && <span className={styles.movieDuration}>{hours}ч {minutes}мин</span>}
                        {countries && <span>{countries[0].name}</span>}
                        {year && <span className={styles.year}>{year}г.</span>}
                    </div>
                    <div className={styles.buttons}>
                        <button className={styles.wathFilm}><AiFillCaretRight/>Смотреть фильм</button>
                        <button className={styles.wathTrailer}>Трейлер</button>
                    </div>
                </div>
                </div>
                <Backdrop id={id} backdrop={backdrop}/>
            </header>
    )
}

export default MovieHeader;