import styles from './index.module.scss';
import FilmItem from '../FilmItem';
import { filmData } from '../../utils/interfaces/data';



const FilmList = (data:any) => {

    console.log(data);

    return (
        <ul className={styles.filmList}>
            {data?.data.map((item:filmData) => (
                <FilmItem
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    )
}

export default FilmList;