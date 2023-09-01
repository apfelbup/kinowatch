import styles from './index.module.scss';

import { convertHoursToMinutes } from '../../utils/helpers/convertHoursToMinutes/convertHoursToMinutes';
import { convertMovieType } from '../../utils/helpers/convertMovieType/convertMovieType';
import { Link } from 'react-router-dom';
import { filmData } from '../../utils/interfaces/data';

import Genres from '../Genres';
import Rating from '../Rating';


interface IDetails {
    data: filmData,
    desc?:boolean
}


const Details = ({data, desc=true}:IDetails) => {
    const { id, year, name, type, rating, movieLength, logo, description, genres } = data;


    const movieType = convertMovieType(type);
    const {hours, minutes} = convertHoursToMinutes(movieLength);


    return (
            <div className={styles.filmInfoContent}>
                {logo?.url ? <img className={styles.logo} src={`${logo.url}`} alt={name} /> : <span className={styles.logo}>{name}</span>}
                <Genres genres={genres}/>
                {desc ? (
                    <>
                    <div className={styles.details}>
                        <Rating rating={rating}/>
                        <span className={styles.type}>{movieType}</span>
                        {
                        movieLength 
                        ? <span className={styles.movieDuration}>
                            {hours}ч {minutes}мин
                            </span> 
                        : null
                        }
                        {year && <span className={styles.year}>{year}г.</span>}
                    </div>
                        {description && <p className={styles.description}>{description}</p>}
                    </>
                ): null}

                <Link to={`/film/${id}`} className={styles.wathLink}> Подробнее</Link>
            </div>
    )
}

export default Details;