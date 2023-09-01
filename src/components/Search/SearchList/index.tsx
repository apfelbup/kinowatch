import { useEffect } from 'react';
import { useGetFilmsBySearchQuery } from '../../../services/streamberryAPI';
import FilmList from '../../FilmsList';
import Error from '../../UI/Error';
import Loading from '../../UI/Loading';
import styles from './index.module.scss';


interface ISearchList {
    input:string
}

const SearchList = ({input}:ISearchList) => {
    const {data, isLoading, isError, refetch} = useGetFilmsBySearchQuery(input);
    
    useEffect(() => {
        refetch();
    }, [input]);
    

    return (
            <div className={styles.searchList}>
                {isLoading ? <Loading/> : isError ? <Error/> : <FilmList data={data.docs}/>}
            </div>
    )
}

export default SearchList;