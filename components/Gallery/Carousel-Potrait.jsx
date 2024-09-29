import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useMediaQuery} from '@react-hook/media-query'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import "./carousel.css"

export default () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 585px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 585px) and (max-width : 845px)");
  return (
    <Swiper className='mb-20'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={isMediumDevice?2:isSmallDevice?1:3}
      navigation={isSmallDevice?false:true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src='./images/galleryImages/gallery-2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='./images/galleryImages/gallery-2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='./images/galleryImages/gallery-2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='./images/galleryImages/gallery-2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='/images/galleryImages/gallery-2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='/images/galleryImages/gallery-2.jpg'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='/images/galleryImages/gallery-2.jpg'/>
      </SwiperSlide>
    </Swiper>
  );
};