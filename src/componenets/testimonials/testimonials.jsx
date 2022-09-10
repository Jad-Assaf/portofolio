import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/avatar1.jpg'
import Avt2 from '../../assets/avatar2.jpg'
import Avt3 from '../../assets/avatar3.jpg'
import Avt4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

const data = [
    {
        avatar: Avt1,
        name: 'Tina Snow',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugit exercitationem similique optio rerum molestias odio sequi ipsam sint sit error placeat, ullam libero aperiam laboriosam vitae expedita quis accusantium?'
    },
    {
        avatar: Avt2,
        name: 'Shatta Wale',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugit exercitationem similique optio rerum molestias odio sequi ipsam sint sit error placeat, ullam libero aperiam laboriosam vitae expedita quis accusantium?'
    },
    {
        avatar: Avt3,
        name: 'Kwame Despite',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugit exercitationem similique optio rerum molestias odio sequi ipsam sint sit error placeat, ullam libero aperiam laboriosam vitae expedita quis accusantium?'
    },
    {
        avatar: Avt4,
        name: 'Nana Ama McBrown',
        review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis fugit exercitationem similique optio rerum molestias odio sequi ipsam sint sit error placeat, ullam libero aperiam laboriosam vitae expedita quis accusantium?'
    }
]

const testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default testimonials