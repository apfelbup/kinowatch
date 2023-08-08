import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';

import {AiOutlineClose} from 'react-icons/ai';
import { convertHoursToMinutes } from '../../utils/helpers/convertHoursToMinutes/convertHoursToMinutes';
import { convertMovieType } from '../../utils/helpers/convertMovieType/convertMovieType';
import { closeMovieAccordeon } from '../../redux/slices/movieSlice';
import { Link } from 'react-router-dom';

import Backdrop from '../Backdrop';
import Genres from '../Genres';
import Rating from '../Rating';


const FilmInfo = () => {
    const { id, year, name, type, rating, movieLength, backdrop, logo, description, genres } = useAppSelector(state => state.movieReducer.activeAccordion.movie!);
    const {isActive} = useAppSelector(state => state.movieReducer.activeAccordion);
    const dispatch = useAppDispatch();
    const movieType = convertMovieType(type);
    const {hours, minutes} = convertHoursToMinutes(movieLength);
    
    const [isShowBox, setIsShowBox] = useState<boolean>(false);

    useEffect(() => {
        setIsShowBox(true);
        setTimeout(() => setIsShowBox(false), 1000);
    }, [id]);

    const handlerClose = () => {
        dispatch(closeMovieAccordeon());
    }

    if(!isActive) { return null};
    return (
        
        <section className={isShowBox ? styles.animate : styles.accordion}>
            <button className={styles.close} onClick={handlerClose}><AiOutlineClose/></button>
            <div className={styles.accordionContent}>
                {logo?.url ? <img className={styles.logo} src={`${logo.url}`} alt={name} /> : <span className={styles.logo}>{name}</span>}
                <Genres genres={genres}/>
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
                    <span className={styles.year}>{year}г.</span>
                </div>
                <p className={styles.description}>{description}</p>
                <Link to={`/movie/${id}`} className={styles.wathLink}> Подробнее</Link>
            </div>
            <div className={styles.imgContainer}>
                <Backdrop id={id} backdrop={backdrop}/>
            </div>
        </section>
    )
}

export default FilmInfo;