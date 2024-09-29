import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {useMediaQuery} from '@react-hook/media-query'
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle';
import "./carousel.css"

const CarouselLandscape =() => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 585px)");
  const isMediumDevice = useMediaQuery("only screen and (min-width : 585px) and (max-width : 845px)");
  return (
    <Swiper className=' mt-12 mb-12'
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={isMediumDevice?2:isSmallDevice?1:3}
      navigation={isSmallDevice?false:true}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <Image src='/images/galleryImages/gallery-1.jpg' height={500} width={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/images/galleryImages/gallery-1.jpg' height={500} width={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/images/galleryImages/gallery-1.jpg' height={500} width={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/images/galleryImages/gallery-1.jpg' height={500} width={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/images/galleryImages/gallery-1.jpg' height={500} width={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/images/galleryImages/gallery-1.jpg' height={500} width={500}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/images/galleryImages/gallery-1.jpg' height={500} width={500}/>
      </SwiperSlide>
    </Swiper>
  );
};

export default CarouselLandscape;