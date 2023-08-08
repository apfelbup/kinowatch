import styles from './index.module.scss';

interface IBackdrop {
    id:number,
    backdrop:{url?:string};
}
const Backdrop = ({backdrop, id}:IBackdrop) => {

    return (
            <div className={styles.backdrop}>
                    <div className={styles.background}></div>
                    <img src={`${backdrop.url ? backdrop.url : `https://st.kp.yandex.net/images/film_big/${id}.jpg`}`} alt='poster' />
            </div>
    )
}

export default Backdrop;