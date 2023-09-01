import styles from "./index.module.scss";

import { SwiperSlide } from "swiper/react";
import { filmData } from "../../utils/interfaces/data";
import { useAppSelector } from "../../hooks/reduxhooks";

import FilmInfo from "../FilmInfo";
import FilmItem from "../FilmItem";
import Slider from "../Sliders/SliderArrow";
import Error from "../UI/Error";
import Loading from "../UI/Loading";


interface ICatalog {
    title:string,
    data: filmData[],
    isError:boolean,
    isLoading:boolean
}

const Catalog = ({title, data, isError, isLoading}:ICatalog) => {

    const {activeMovie} = useAppSelector(state => state.movieReducer.activeFilmboard);
    const active = data?.find(item => item.id === activeMovie);

    return(
        <div>
            <h3 className={styles.catalogTitle}>{title}</h3>

            {isLoading ? <Loading/> : isError ? <Error/> : (
                <Slider>
                    {data?.map((item:filmData) => (
                    <SwiperSlide key={item.id} className={styles.slide}>
                        <FilmItem slider={true} item={item}/>
                    </SwiperSlide>
                    ))}
                </Slider>
            )
            }
        {active && <FilmInfo/>}
        </div>
    )
}

export default Catalog;