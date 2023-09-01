import styles from './index.module.scss';
import { convertRatingColor } from '../../utils/helpers/convertRatingColor/convertRatingColor';
import { rating } from '../../utils/interfaces/data';



interface IRating {
    rating:rating
}

const Rating = ({rating}:IRating) => {

    const ratings = rating.imdb !== 0 ? rating.imdb : Math.round(rating.kp);

    const color = convertRatingColor(ratings);

    return (
        <>
            {ratings && 
                <span className={styles.rating} style={{backgroundColor:color}}>
                    {ratings}
                </span>
            }
        </>
    )
}

export default Rating;