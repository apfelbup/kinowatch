import styles from "./index.module.scss";

import { SwiperSlide } from "swiper/react";

import FilmInfo from "../FilmInfo";
import FilmItem from "../FilmItem";
import Slider from "../Sliders/SliderArrow";
import { filmData } from "../../utils/interfaces/data";


interface ICatalog {
    title:string,
    data: filmData[]
}

const Catalog = ({title, data}:ICatalog) => {


    return(
        <div>
            <h3 className={styles.catalogTitle}>{title}</h3>
            <Slider>
                {data?.map((item:filmData) => (
                <SwiperSlide key={item.id} className={styles.slide}>
                    <FilmItem item={item}/>
                </SwiperSlide>
            ))}
            </Slider>
            <FilmInfo/>
        </div>
    )
}

export default Catalog;