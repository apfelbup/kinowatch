import styles from './index.module.scss';
import {AiOutlineClose} from 'react-icons/ai';

interface ITrailerPopup {
    handler: () => void,
    trailer: any
}

const TrailerPopup = ({handler, trailer}:ITrailerPopup) => {

    return (
        <div className={styles.popup}>
            <div className={styles.trailer}>
            <button className={styles.close} onClick={handler}><AiOutlineClose/></button>
            {trailer?.trailers[0]?.url 
            ? (
                <iframe
                className={styles.iframe}
                src={`${trailer.trailers[0].url}?autoplay=1`}
                title="Трейлер"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />
            )
            : (
                <p className={styles.notfound}> Трейлер не сыскался :( </p>
            )
            }

            </div>
        </div>
    )
}

export default TrailerPopup;