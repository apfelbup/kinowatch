import styles from "./index.module.scss";

import {AiFillCaretRight} from 'react-icons/ai';
import { convertHoursToMinutes } from "../../../../utils/helpers/convertHoursToMinutes/convertHoursToMinutes";
import { convertMovieType } from "../../../../utils/helpers/convertMovieType/convertMovieType";

import Backdrop from "../../../../components/Backdrop";
import Genres from "../../../../components/Genres";
import Rating from "../../../../components/Rating";
import { useState } from "react";
import TrailerPopup from "../../../../components/TrailerPopup";
import { useDisableBodyScroll } from "../../../../hooks/useDisableScroll";
import { filmData } from "../../../../utils/interfaces/data";



interface IMovieHeader {
    data:filmData[]
}

const MovieHeader = ({data}:IMovieHeader) => {
    const { id, year, name, type, rating, movieLength, backdrop, logo, genres, countries, videos } = data[0];
    const movieType = convertMovieType(type);
    const {hours, minutes} = convertHoursToMinutes(movieLength);

    const [popup, setPoppup] = useState(false);

    useDisableBodyScroll(popup);
 

    const trailerHandler = () => {
        setPoppup(!popup)
    }


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
                        <button onClick={trailerHandler} className={styles.wathFilm}><AiFillCaretRight/>Смотреть фильм</button>
                        <button onClick={trailerHandler} className={styles.wathTrailer}>Трейлер</button>
                    </div>
                </div>
                </div>

                {popup && <TrailerPopup trailer={videos} handler={trailerHandler}/>}
                <Backdrop id={id} backdrop={backdrop}/>
            </header>
    )
}

export default MovieHeader;