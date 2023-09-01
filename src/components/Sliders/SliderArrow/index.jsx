import styles from './index.module.scss';
import "./index.scss";
import { Swiper} from 'swiper/react';
import {AiOutlineLeft, AiOutlineRight} from 'react-icons/ai';

import 'swiper/css';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { useRef } from 'react';



const Slider = ({children, limit='auto', loop=false, speed=400}) => { 


  const navPrevRef = useRef(null);
  const navNextRef = useRef(null);

  const navigation = {
		prevEl: navPrevRef.current,
		nextEl: navNextRef.current,
	};

  const onSwiper = (swiper) => {

			swiper.params.navigation.prevEl = navPrevRef.current;
			swiper.params.navigation.nextEl = navNextRef.current;


			swiper.navigation.destroy();
			swiper.navigation.init();
			swiper.navigation.update();

	};

    return (
        <section className={styles.slider}>
          <div className={styles.swiperContainer}>
          <button className='swiper-prev' ref={navPrevRef}> <AiOutlineLeft/> </button>
          <button className='swiper-next' ref={navNextRef}> <AiOutlineRight/> </button>
          <Swiper
        slidesPerView={limit}
        loop={loop}
        speed = {speed}
        spaceBetween={30}
        onSwiper={onSwiper}
        navigation={navigation}
        modules={[Navigation]}
      >
        {children}
      </Swiper>
        </div>
        </section>
    )
}

export default Slider;