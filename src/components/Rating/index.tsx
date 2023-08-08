import styles from './index.module.scss';
import { convertRatingColor } from '../../utils/helpers/convertRatingColor/convertRatingColor';
import { rating } from '../../utils/interfaces/data';




const Rating = (rating:rating|any) => {

    const item = rating.imdb !== 0 ? rating.imdb : Math.round(rating.kp);

    const color = convertRatingColor(item);

    return (
        <>
            {rating && 
                <span className={styles.rating} style={{backgroundColor:color}}>
                    {item}
                </span>
            }
        </>
    )
}

export default Rating;