import styles from './index.module.scss';



const Footer = () => {


    return (
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                <h3 className={styles.title}>Streamberry - ваш гарант приятного вечера!</h3>
                <p className={styles.content}>Здесь вы можете найти кинокартины под любой запрос и настроение: от трогательной мелодрамы до нуарного хоррора. Мы гарантируем качество картинки и интерфейса, широкий выбор и легкость поиска. Оставайтесь с нами и всегда будьте в курсе последних новинок!</p>
            </div>
        </footer>
    )
}

export default Footer;