import React, { useEffect, useState } from 'react'
import Style from "./index.module.css"
import Cards from '../Cards/Cards'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import axios from "../../Instance/AuthInstance"

const SampleNextArrow = (props) => {
    const { onClick } = props
    return (
        <div className={Style.control_btn} onClick={onClick}>
            <button className={Style.next}>
                <i> <IoIosArrowForward /> </i>
            </button>
        </div>
    )
}
const SamplePrevArrow = (props) => {
    const { onClick } = props
    return (
        <div className={Style.control_btn} onClick={onClick}>
            <button className={Style.prev}>
                <i> <IoIosArrowBack /> </i>
            </button>
        </div>
    )
}


const Trending = ({ fetchUrl }) => {


    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(fetchUrl).then((Response) => {
            setMovies(Response.data.results)
        })
    }, [fetchUrl]);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }


    return (
        <div className={Style.trending}>
            <div className={Style.container}>
                <Slider {...settings}>
                    {movies.map((item, index)=>{
                        return(
                            <Cards movie={item} />
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Trending
