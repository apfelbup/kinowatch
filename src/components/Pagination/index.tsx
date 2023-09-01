import styles from './index.module.scss';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';
import { useEffect } from 'react';



interface IPagination {
    page: number,
    pages: number,
    setPage: (arg:number) => void
}

const Pagination = ({page, pages, setPage}:IPagination) => {

    const isFirstPage = page === 1;
    const isLastPage = page === pages;

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });

    }, [page, pages])
    

    
    return (
        <>
            {
                pages > 1 && (
                    <div className={styles.pagination}>
                        <button onClick={() => setPage(1)}>1</button>
                        <button className={styles.step} onClick={() => setPage(page-1)} disabled={isFirstPage}><AiOutlineLeft/></button>
                        <span>{page}/{pages}</span>
                        <button className={styles.step} onClick={() => setPage(page+1)} disabled={isLastPage}><AiOutlineRight/></button>
                        <button onClick={() => setPage(pages)}>{pages}</button>
                    </div>
                )
            }
        </>
    )
}

export default Pagination;