import { SwiperSlide } from 'swiper/react';
import { useGetNewFilmsQuery } from '../../services/streamberryAPI';
import { filmData } from '../../utils/interfaces/data';
import Slider from '../Sliders/SliderArrow';
import Error from '../UI/Error';
import Loading from '../UI/Loading';
import styles from './index.module.scss';
import PromoBlock from './PromoBlock';




const PromoSection = () => {


    const {data, isLoading, isError} = useGetNewFilmsQuery(4);


    if(isLoading) return <Loading/>
    if(isError) return <Error/>
    return (
        <section className={styles.promoSection}>
                <Slider limit="1" loop={true} speed={800}>
                    {data?.docs.map((item:filmData) => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <PromoBlock item={item}/>
                    </SwiperSlide>
                    ))}
                </Slider>
        </section>
    )
}

export default PromoSection;