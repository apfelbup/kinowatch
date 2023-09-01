import styles from './index.module.scss';
import "./index.scss";
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { FreeMode } from 'swiper/modules';



const Carousel = ({children}) => {

    return (
        <section className={styles.carousel}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        freeMode={true}
        pagination={false}
        modules={[FreeMode]}
        className="carousel"
        >
          {children}
        </Swiper>
        </section>
    )
}

export default Carousel;