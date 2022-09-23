import React from 'react'
import {Swiper,SwiperSlide} from 'swiper/react';
import 'swiper/css'
import { Navigation,Pagination } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from '../images/gallery-img-01-tn.jpg'
import img2 from '../images/gallery-img-02-tn.jpg'
import img3 from '../images/gallery-img-03-tn.jpg'
import img4 from '../images/gallery-img-04-tn.jpg'
import img5 from '../images/gallery-img-05-tn.jpg'



 function Work() {
  return (
    <div className='work'>
    <h2>Our Work</h2>
    <p>Aliquam interdum, nisl sed faucibus tempor, 
    massa velit laoreet ipsum, et faucibus sapien magna at enim.
     Suspendisse a dictum tortor, vel rhoncus libero.
      Integer at lacus velit. Nullam dapibus venenatis placerat.</p>
    <div className='swipper'>
<Swiper
modules={[Navigation, Pagination]}
spaceBetween={50}
slidesPerView={3}
navigation
pagination={{ clickable: true }}
>
<SwiperSlide><img  src={img1} alt='animals'/></SwiperSlide>
<SwiperSlide><img src={img2} alt='animals'/></SwiperSlide>
<SwiperSlide><img src={img3} alt='animals'/></SwiperSlide>
<SwiperSlide> <img src={img4} alt='animals'/></SwiperSlide>
<SwiperSlide><img src={img5} alt='animals'/></SwiperSlide>
</Swiper>
 
   
   
    </div>

    </div>
  )
}
export default Work