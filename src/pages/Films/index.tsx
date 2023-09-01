import FilmsSection from "../../components/FilmsSection";
import styles from "./index.module.scss";






const Films = () => {

    return(
        <section className={styles.films}>
            <FilmsSection title="Фильмы" type={1}/>
        </section>
    )
}

export default Films;