import SectionTitle from "../../components/sectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";

import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://bistro-boss-server-tan-six.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])


    return (
        <div>
            
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"---What Our Clients Say---"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-20">

                {
                    reviews.map((review, idx) => <SwiperSlide key={idx}>
                       
                        <div className="px-24  text-center">
                        <Rating className="w-full mx-auto mb-3"
                            style={{ maxWidth: 180 }}
                            value={review.rating}
                            readOnly
                        />

                            <p>{review.details}</p>
                            <h2 className="text-2xl font-bold text-amber-400">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>


        </div>
    );
};

export default Testimonials;