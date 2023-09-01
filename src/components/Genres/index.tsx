import styles from './index.module.scss';
import { genres } from '../../utils/interfaces/data';
import Genre from './Genre';



interface IGenres {
    genres:genres[]
}

const Genres = ({genres}:IGenres) => {
    return (
        <ul className={styles.genres}>
            {genres?.map((item:genres) => (
                <Genre genre={item}/>
            ))}
        </ul>
    )
}

export default Genres;