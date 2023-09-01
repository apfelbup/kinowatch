import styles from "./index.module.scss";

import { useGetfamilyFilmsQuery, useGetNewFilmsQuery, useGetNewSeriesQuery} from "../../services/streamberryAPI";
import { genres } from "../../utils/constans/films";
import { SwiperSlide } from "swiper/react";

import Carousel from "../../components/Sliders/Carousel";
import Genre from "../../components/Genres/Genre";
import PromoSection from "../../components/PromoSection";
import Catalog from "../../components/Catalog";



const Home = () => {

    const familyFilms = useGetfamilyFilmsQuery(20);
    const seriesData = useGetNewSeriesQuery(20);
    const filmsData = useGetNewFilmsQuery(20);

    return(
        <div className={styles.home}>

                <PromoSection/>
                <div className={styles.centered}>
                <Carousel>
                {genres.map((item:{name:string},index:number) => {
                    return (
                        <SwiperSlide key={`${item.name}${index}`} className={styles.persons}>
                            <Genre genre={item}/>
                        </SwiperSlide>
                        )
                })}
                </Carousel>
            </div>

            <Catalog data={familyFilms?.data?.docs} isError={familyFilms?.isError} isLoading={familyFilms?.isLoading} title="Смотрим всей семьей"/>
            <Catalog data={filmsData?.data?.docs!} isError={filmsData?.isError} isLoading={filmsData?.isLoading} title="Новинки года"/>
            <Catalog data={seriesData?.data?.docs!} isError={seriesData?.isError} isLoading={seriesData?.isLoading} title="Новые сериалы"/>
        </div>
    )
}

export default Home;