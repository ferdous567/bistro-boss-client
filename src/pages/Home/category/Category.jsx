
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';

const Category = () => {
    return (
        <section className='my-20'>
            <SectionTitle heading={"ORDER ONLINE"}
            subHeading={"---From 11:00am to 10:00pm---"}>
                
            </SectionTitle>
           
            <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper  max-w-screen-md"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h2 className=' text-xl font-bold text-center text-white -mt-10'>SALADS</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h2 className='text-xl font-bold text-center text-white -mt-10'>SOUPS</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h2 className='text-xl font-bold text-center text-white -mt-10'>PIZZAS</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h2 className='text-xl font-bold text-center text-white -mt-10'>DESERTS</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h2 className='text-xl font-bold text-center text-white -mt-10'>NOODLES</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h2 className='text-xl font-bold text-center text-white -mt-10'>PIZZAS</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h2 className='text-xl font-bold text-center text-white -mt-10'>SALADS</h2>
                </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h2 className='text-xl font-bold text-center text-white -mt-10'>SOUPS</h2>
                </SwiperSlide>
        </Swiper>
        </section>
    );
};

export default Category;