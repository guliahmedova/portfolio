"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import linkIcon from '@/assets/images/link.svg';
import projects from '@/assets/constants/projects';
    
SwiperCore.use([Navigation]);

const Projects = () => {
    return (
        <section id="work" className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-space_cadet to-blue-900 shadow-2xl">
            <div className="w-10/12 relative">
                <Swiper
                    className="multiple-slide-carousel"
                    loop={true}
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    breakpoints={{
                        1920: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1028: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        990: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        },
                        456: {
                            slidesPerView: 1,
                            spaceBetween: 0,
                        }
                    }}
                >
                    {projects?.map((p) => (
                        <SwiperSlide key={p.id}>
                            <div className="bg-indigo-50 rounded-2xl min-h-96 p-10 shadow-lg">
                                <div className='w-full h-64 mx-auto'>
                                    <Image src={p.image} alt='' className='w-full h-full object-contain' />
                                </div>
                                <div className='w-full border-t border-t-blue-200 pt-4'>
                                    <Link href={p.path} target='_blank' className='font-bold text-xl mb-2 flex items-center gap-2 hover:underline'>
                                        {p.title}
                                        <Image src={linkIcon} className='w-6 h-6' alt='link icon' />
                                    </Link>
                                    <p className='select-none'>{p.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="absolute flex justify-center items-center m-auto left-0 right-0 w-fit top-8">
                    <button id="slider-button-left" className="swiper-button-prev group !p-2 flex justify-center items-center border border-blue-900 !text-blue-900 hover:!text-white !w-10 !h-10 after:!text-lg transition-all duration-500 rounded-full hover:bg-blue-800 !-translate-x-20 bg-indigo-50" data-carousel-prev>
                    </button>
                    <button id="slider-button-right" className="swiper-button-next group !p-2 flex justify-center items-center border border-blue-900 !text-blue-900 hover:!text-white !w-10 !h-10 after:!text-lg transition-all duration-500 rounded-full hover:bg-blue-800 !translate-x-20 bg-indigo-50" data-carousel-next>
                    </button>
                </div>
            </div>
        </section>
    )
};

export default Projects;