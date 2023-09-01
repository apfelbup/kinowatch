import styles from "./index.module.scss";

import FilmsSection from "../../components/FilmsSection";




const Cartoons = () => {


    return(
        <section className={styles.cartoons}>
            <FilmsSection title="Мультфильмы" type={3}/>
        </section>
    )
}

export default Cartoons;