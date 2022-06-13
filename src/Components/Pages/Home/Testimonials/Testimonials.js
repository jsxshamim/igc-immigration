import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";

const Testimonials = () => {
    return (
        <section className="container mx-auto testimonial-bg bg-slate-100 py-20">
            <div className="pb-10 text-center">
                <h1 className="text-4xl sm:text-5xl text-secondary font-semibold mb-5 ">Our Success Stories...</h1>
                <p className="text-lg text-paragraph">Our immigration clients often tell us after their case is concluded it would have helped to know of similar stories that are real and not just what you hear on the street. </p>
            </div>

            <div className="testimonials">
                <>
                    <Swiper
                        spaceBetween={50}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 2,
                                spaceBetween: 50,
                            },
                            1290: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        modules={[Autoplay, Pagination]}
                    >
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna
                                    suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna
                                    suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna
                                    suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna
                                    suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna
                                    suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna
                                    suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    At sagittis congue augue egestas undo magna ipsum vitae purus ipsum primis in cubilia laoreet augue ociis at nullam tempor sapien gravida porta integer at odio velna auctor. An augue in cubilia laoreet magna
                                    suscipit egestas magna ipsum vitae purus ipsum primis cubilia laoreet augue ultrice ligula egestas
                                </p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </section>
    );
};

export default Testimonials;
