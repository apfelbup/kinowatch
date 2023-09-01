import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDebounce } from '../../../hooks/useDebounce';
import SearchList from '../SearchList';
import styles from './index.module.scss';



interface ISearchWindow {
    handler: () => void;
}

const SearchWindow = ({handler}:ISearchWindow) => {
    const [input, setInput] = useState<string>('');
    const {debouncedValue} = useDebounce(input.trim(), 600);


    return (
        <div className={styles.searchWindow}>
            <div className={styles.searchBlock}>
                <button className={styles.close} onClick={handler}><AiOutlineClose/></button>
                <form className={styles.form}>
                    <span className={styles.title}>Поиск</span>
                    <div className={styles.inputForm}>
                    <input value={input} onChange={(e)=>setInput(e.target.value)} className={styles.input} type="text" placeholder='введите название...' />
                    </div>
                </form>
                {debouncedValue.length ? <SearchList input={debouncedValue}/> : null}
            </div>
        </div>
    )
}

export default SearchWindow;