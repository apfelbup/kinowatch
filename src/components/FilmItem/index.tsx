import styles from './index.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';

import { setMovieAccordeon, togglePopup } from '../../redux/slices/movieSlice';
import { filmData } from '../../utils/interfaces/data';
import { useNavigate } from 'react-router';

import FilmInfo from '../FilmInfo';



interface IFilmItem { 
    item: filmData,
    slider:boolean
}

const FilmItem = ({item, slider=false}:IFilmItem) => {
    const { id, name} = { ...item };
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {isPopup} = useAppSelector(state => state.movieReducer);
    const {activeMovie, isActive} = useAppSelector(state => state.movieReducer.activeFilmboard);
    const active = activeMovie === id;

    const openFilmInfo = () => {
        if(isPopup) {
            navigate(`/film/${id}`);
            dispatch(togglePopup());
        } else {
            dispatch(setMovieAccordeon({...item})); 
        }

    }

    return (
        <li className={active && isActive && !slider ? styles.activeFilm  : ''} >
            <div className={styles.filmItem}>
            <div className={styles.container}>
            <button onClick={openFilmInfo} className={active && isActive ? styles.imgContainerActive : styles.imgContainer}>
                <img src={`https://st.kp.yandex.net/images/film_iphone/iphone360_${id}.jpg`} alt={name} />
            </button>
            </div> 
            {(active && !slider) && 
            <div className={styles.previewBox}>
                <FilmInfo/>
            </div>
            }
            </div>
        </li>
    )
}

export default FilmItem;