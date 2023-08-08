import styles from "./index.module.scss";

import { useAppSelector } from "../../../../hooks/reduxhooks";

import Persons from "../../../../components/Persons";




const MovieInfo = () => {
    const {description,persons} = useAppSelector(state => state.movieReducer.activeAccordion.movie);

    return(
        <div className={styles.movieInfo}>

            <div className={styles.description}>
                <h4>Описание</h4>
                <p>{description}</p>
            </div>
            <div className={styles.persons}>
                <h4>Актеры и сценаристы</h4>
                <Persons persons={persons}/>
            </div>
        </div>
    )
}

export default MovieInfo;