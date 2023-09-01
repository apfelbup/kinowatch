import styles from './index.module.scss';
import FilmItem from '../FilmItem';
import { filmData } from '../../utils/interfaces/data';


interface IFilmList {
    data:filmData[] | undefined
}

const FilmList = ({data}:IFilmList) => { 


    return (
        <ul className={styles.filmList}>
            {data?.map((item:filmData) => (
                <FilmItem
                    slider={false}
                    key={item.id}
                    item={item}
                />
            ))}
        </ul>
    )
}

export default FilmList;