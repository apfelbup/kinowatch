import styles from "./index.module.scss";

import Persons from "../../../../components/Persons";
import { filmData } from "../../../../utils/interfaces/data";



interface IMovieInfo {
    data: filmData[]
}

const MovieInfo = ({data}:IMovieInfo) => {
    const {description, persons} = data[0];

    return(
        <div className={styles.movieInfo}>

            <div className={styles.description}>
                <h4>Описание</h4>
                <p>{description}</p>
            </div>
            <div className={styles.persons}>
                <h4>Актеры и сценаристы</h4>
                <Persons persons={persons!}/>
            </div>
        </div>
    )
}

export default MovieInfo;