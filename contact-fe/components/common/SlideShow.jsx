import Image from 'next/image';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'bootstrap/dist/css/bootstrap.min.css';

SwiperCore.use([Autoplay]);

export default function SlideShow() {
    const slides = [
        {
            image: '/assets/images/services/services-gallery-1.jpg',
            title: 'Blandit vel, rhoncus venenatis vel, rhoncus 1.',
            subTitle:
                'Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.',
            interval: 1500,
        },
        {
            image: '/assets/images/services/services-gallery-2.jpg',
            title: 'Blandit vel, rhoncus venenatis vel, rhoncus 2.',
            subTitle:
                'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.',
            interval: 500,
        },
        {
            image: '/assets/images/services/services-gallery-3.jpg',
            title: 'Blandit vel, rhoncus venenatis vel, rhoncus 3.',
            subTitle:
                'Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death. As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.',
            interval: 2500,
        },
    ];

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000,
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="slide-show-wrapper">
                                    <div className="slide-show-img">
                                        <Image
                                            src={slide.image}
                                            alt="slide show image"
                                            width={1920}
                                            height={800}
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="slide-show-title">
                                        <h4>{slide.title}</h4>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
