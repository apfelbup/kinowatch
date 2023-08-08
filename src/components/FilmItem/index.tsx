import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';

import { setMovieAccordeon } from '../../redux/slices/movieSlice';
import { filmData } from '../../utils/interfaces/data';



interface IFilmItem { 
    item: filmData
}

const FilmItem = ({item}:IFilmItem) => {
    const { id, name} = { ...item };
    const dispatch = useAppDispatch();
    const {activeMovie} = useAppSelector(state => state.movieReducer.activeAccordion);
    const {isActive} = useAppSelector(state => state.movieReducer.activeAccordion);
    const active = activeMovie === id;

    const setAccordion = () => {
        dispatch(setMovieAccordeon({...item}))
    }

    return (
        <li className={styles.filmItem}>
            <div className={styles.container}>
            <button onClick={setAccordion} className={active && isActive ? styles.imgContainerActive : styles.imgContainer}>
                <img src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`} alt={name} />
            </button>
            </div> 
        </li>
    )
}

export default FilmItem;