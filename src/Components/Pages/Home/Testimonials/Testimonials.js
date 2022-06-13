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
                                        <h3 className="text-xl font-bold text-secondary">Celeste Jimenez</h3>
                                        <p>(USA Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    It's an honor to be a part of this company. It's been my dream to become a Digital Dude for as long as I can remember, so when I finally got the opportunity to audition for the team, nothing could have stopped me
                                    from making it happen. I'm happy everyday that I get to work with these guys and show off my skills in design and development.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Kaye Rocha</h3>
                                        <p>(USA Tourist Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    I've been working with the team at The Digital Dudes for over a year now. The team is awesome and easy to work with. They have not had any issues with delivering on time and they are always willing to go the extra
                                    mile when needed. I'd recommend them to anyone who's looking for a team of skilled and talented professionals that are experts in their field.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Lourdes Mcclain</h3>
                                        <p>(USA Family Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    I created my business with the help of the Digital Dudes. I can't say enough about how much I love them and their team. They are always so helpful and have great ideas when I'm in a creative rut. All that other
                                    nonsense aside, The Digital Dudes is the best digital agency out there, hands down!
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Dionne Carter</h3>
                                        <p>(Canada Business Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    The Digital Dudes is a team of skilled professionals, always willing to help, who will succeed in whatever they set their minds to. They have overseen the creation of many of our successful marketing campaigns and
                                    I can confidently say that they are one of the best web marketing firms out there.
                                </p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="p-8 bg-white rounded shadow-lg">
                                <div className="flex gap-5 items-center mb-5">
                                    <img className="rounded-full h-20 w-20 object-cover" src="https://i.ibb.co/wd14B67/service-6.jpg" alt="" />
                                    <div className="title">
                                        <h3 className="text-xl font-bold text-secondary">Full Name</h3>
                                        <p>( UK Student Visa)</p>
                                    </div>
                                </div>
                                <p className="italic text-paragraph">
                                    It was just a few days before my website launch and I had no idea where I should go to get video production done. Luckily, I found The Digital Dudes and they have been a lifesaver ever since. All my videos look
                                    slick and professional, which is exactly what I wanted. They are also highly responsive to feedback, which is great since the client always knows best
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
