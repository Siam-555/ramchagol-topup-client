import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import img1 from "../../../assets/img1.jpg";
import img2 from "../../../assets/img2.jpg";
import img3 from "../../../assets/img3.jpg";
import img4 from "../../../assets/img4.jpg";
import img5 from "../../../assets/img5.jpg";
import img6 from "../../../assets/img6.jpg";

const Banner = () => {
  return (
    <section className='pt-3'>
      <Swiper
        effect={'fade'}
        loop={true}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Pagination]}
        className="mySwiper rounded-xl max-w-[97vw]"
      >
        <SwiperSlide className='max-h-[97vh]'><img src={img1} /></SwiperSlide>
        <SwiperSlide className='max-h-[97vh]'><img src={img2} /></SwiperSlide>
        <SwiperSlide className='max-h-[97vh]'><img src={img3} /></SwiperSlide>
        <SwiperSlide className='max-h-[97vh]'><img src={img4} /></SwiperSlide>
        <SwiperSlide className='max-h-[97vh]'><img src={img5} /></SwiperSlide>
        <SwiperSlide className='max-h-[97vh]'><img src={img6} /></SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;