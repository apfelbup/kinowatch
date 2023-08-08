import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { genres } from '../../utils/interfaces/data';




const Genres = ({genres}:any) => {
    return (
        <ul className={styles.genres}>
            {genres?.map((item:genres) => (
                <li key={item.name}><Link to="/">{item.name}</Link></li>
            ))}
        </ul>
    )
}

export default Genres;