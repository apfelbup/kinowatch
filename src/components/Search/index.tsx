import styles from './index.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import SearchWindow from './SearchWindow';
import { useDisableBodyScroll } from '../../hooks/useDisableScroll';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxhooks';
import { togglePopup } from '../../redux/slices/movieSlice';




const Search = () => {

    const {isPopup} = useAppSelector(state=> state.movieReducer);
    const dispatch  = useAppDispatch();
    useDisableBodyScroll(isPopup);

    const handlerPopup = () => {
        dispatch(togglePopup());
    }


    return (
        <>
            <button onClick={handlerPopup} className={styles.search}><AiOutlineSearch/></button>
            {isPopup && <SearchWindow handler={handlerPopup}/>}
        </>
    )
}

export default Search;