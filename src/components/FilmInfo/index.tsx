import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';

import {AiOutlineClose} from 'react-icons/ai';
import { closeMovieAccordeon } from '../../redux/slices/movieSlice';

import Backdrop from '../Backdrop';
import Details from '../Details';


const FilmInfo = () => {
    const movie = useAppSelector(state => state.movieReducer.activeFilmboard.movie!);
    const {isActive} = useAppSelector(state => state.movieReducer.activeFilmboard);
    const dispatch = useAppDispatch();
    
    const [isShowBox, setIsShowBox] = useState<boolean>(false);

    useEffect(() => {
        setIsShowBox(true);
        setTimeout(() => setIsShowBox(false), 1000);
    }, [movie.id]);

    const handlerClose = () => {
        dispatch(closeMovieAccordeon());
    }

    if(!isActive) { return null};
    return (
        
        <section className={isShowBox ? styles.animate : styles.filmInfo}>
            <button className={styles.close} onClick={handlerClose}><AiOutlineClose/></button>
            <div className={styles.info}>
                <Details data={movie}/>
            </div>
            {movie.backdrop &&
                    <div className={styles.imgContainer}>
                        <div className={styles.test}></div>
                        <Backdrop id={movie.id} backdrop={movie.backdrop}/>
                    </div>
            }

        </section>
    )
}

export default FilmInfo;