import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import Carousel from '../Sliders/Carousel';
import { persons } from '../../utils/interfaces/data';




const Persons = (persons:persons[]|any) => {

    return (
        <>
            <Carousel>
            {persons?.map((item:persons,index:number) => {
                return item.name ? 
                    <SwiperSlide key={`${item.name}${index}`} className={styles.persons}>
                    <Link className={styles.watchPerson} to="/">
                        <div className={styles.photo}><img src={item.photo} alt={item.name} /></div>
                        {item.name}
                    </Link>
                    </SwiperSlide>
                : null

            })}
            </Carousel>
        </>
    )
}

export default Persons;