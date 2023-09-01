import styles from "./index.module.scss";
import FilmList from "../../components/FilmsList";
import Loading from "../../components/UI/Loading";
import Error from "../../components/UI/Error";
import SectionHeader from "../../components/SectionHeader";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import { useGetFilmsQuery } from "../../services/streamberryAPI";


interface IFilmsSection {
    type:number,
    title:string
}

const FilmsSection = ({type, title}:IFilmsSection) => {

    const [page,setPage] = useState<number>(1);
    const [rating, setRating] = useState<null | string>(null);
    const [year, setYear] = useState<null | string>(null);
    const [genre, setGenre] = useState<null | string>(null);

    const {data, isFetching, isError} = useGetFilmsQuery({filters:{
        rating: rating,
        year: year,
        genre:genre,
        filmsType:type
    }, page:page});

    useEffect(() => {

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

    }, [])
    





    return(
            <div className={styles.wrapper}>
                <SectionHeader genre={genre} setRating={setRating} setYear={setYear} setGenre={setGenre} title={title}/>

                {isFetching ? <Loading/> : isError ? <Error/> : <FilmList data={data?.docs}/>}
                {(data && !isFetching && !isError) && <Pagination page={page} setPage={setPage} pages={data.pages}/>}
            </div>
    )
}

export default FilmsSection;