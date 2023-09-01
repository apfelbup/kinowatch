
import { filmData } from '../../../utils/interfaces/data';
import Details from '../../Details';

import styles from './index.module.scss';



interface IPromoBlock {
    item: filmData
}

const PromoBlock = ({item}:IPromoBlock) => {

    const { backdrop } = item;

    return (
        <div className={styles.promoBlock}>
            <div className={styles.info}>
                <Details data={item} desc={false}/>
            </div>

            {backdrop &&
                    <div className={styles.imgContainer}>
                        <img src={backdrop.url} alt="poster" />
                    </div>
            }

        </div>
    )
}

export default PromoBlock;