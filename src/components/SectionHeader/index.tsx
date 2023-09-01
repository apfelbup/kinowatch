import { useAppSelector } from '../../hooks/reduxhooks';
import { genresFilter, rating, years } from '../../utils/constans/filters';
import Selection from '../Selection';
import styles from './index.module.scss';


interface ISectionHeader {
    title:string,
    setRating: (arg:null) => void,
    setYear: (arg:null) => void,
    setGenre: (arg:null) => void,
    genre: string | null
}

const SectionHeader = ({title, setRating, setYear, setGenre, genre}:ISectionHeader) => {

    const {filters} = useAppSelector(state => state.movieReducer);

    return (
        <header className={styles.header}>
                <h2 className={styles.title}>
                    {title}{genre?`: ${genre}` : ''}
                </h2>
                <div className={styles.filters}>
                    <Selection filters={filters} handler={setGenre} options={genresFilter}/>
                    <Selection handler={setYear} options={years}/>
                    <Selection handler={setRating} options={rating}/>
                </div>
        </header>
    )
}

export default SectionHeader;