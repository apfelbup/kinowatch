import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../../hooks/reduxhooks';
import { setGenre } from '../../../redux/slices/movieSlice';
import { genres } from '../../../utils/interfaces/data';



interface IGenre {
    genre:genres
}

const Genre = ({genre}:IGenre) => {
    const dispatch = useAppDispatch();

    const handleFilters = () => {
        dispatch(setGenre(genre.name));
    }

    return (
        <li onClick={handleFilters} className={styles.genre} key={genre.name}><Link to="/films">{genre.name}</Link></li>
    )
}

export default Genre;