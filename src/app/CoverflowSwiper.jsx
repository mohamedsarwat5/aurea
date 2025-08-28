"use client"; // لو انت شغال app router في Next.js

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Header from "./Header.jsx/Header";

export default function CoverflowSwiper() {

    const data = [
        {
            "name": "Emily R.",
            "testimonial": "Auréa completely transformed my skincare routine. My skin feels smoother and looks radiant after just a few weeks of use.",
            "img": "/f3.jpg"
        },
        {
            "name": "Tom F.",
            "testimonial": "I was skeptical about using face oils, but Auréa changed my mind. It absorbs quickly and doesn’t feel greasy at all.",
            "img": "/img.jpg"
        },
        {
            "name": "Sophia L.",
            "testimonial": "This oil is a game-changer! My dry patches are gone and my skin has a healthy glow every morning.",
            "img": "/f2.jpg"
        },
        {
            "name": "James W.",
            "testimonial": "I’ve tried many skincare products, but Auréa stands out. It hydrates my skin perfectly without clogging pores.",
            "img": "/m1.jpg"
        },
        {
            "name": "Isabella M.",
            "testimonial": "I love how lightweight Auréa feels. My makeup goes on flawlessly after using it as a base.",
            "img": "/f1.jpg"
        },
        {
            "name": "Daniel K.",
            "testimonial": "My skin tone looks more even and refreshed since I started using Auréa. Definitely my new go-to product.",
            "img": "/m3.jpg"
        }
    ]




    return (<>
        <div className=" md:py-12 py-9">
            <Header title={"Testimonials"} desc={"What our customers say"}></Header>
            <div className=" md:w-5xl px-4 md:mt-8 mt-4 mx-auto  ">
                <Swiper
                    effect={"coverflow"}
                    grabCursor={true}
                    centeredSlides={true}
                    breakpoints={{
                        0: {           // 👈 موبايل
                            slidesPerView: 1,
                        },

                        1024: {        // 👈 ديسكتوب (lg في Tailwind)
                            slidesPerView: 2,
                        },
                    }}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    loop={true}
                    pagination={{ clickable: true }}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-col gap-5 p-5 md:p-12 md:h-[300px] h-[250px]  bg-white  rounded-2xl">
                                <div className="flex  items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        <img className="rounded-full w-[70px] h-[70px] shrink-0 object-cover" src={card.img} alt="" />
                                        <h2 className="text-lg">{card.name}</h2>
                                    </div>
                                    <div>
                                        {Array.from({ length: 5 }).map((_, i) => (
                                            <i key={i} className="fa-solid fa-star text-yellow-500"></i>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <p>{card.testimonial}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>
        </div>
    </>);
}
