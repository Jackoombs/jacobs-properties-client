import React, { useRef, useState } from "react";
import TeamProfile from "./TeamProfile";
import { Swiper, SwiperSlide } from "swiper/react";
// eslint-disable-next-line
import "swiper/css/bundle";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export default function TeamCarousel() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <TeamProfile name="Jon Coombs" role="Managing Director" image="jon.jpg" description="Jon Coombs is a top G and is well 
        known for his impeccable style and flawless physique. He is well known in the property world and the top don of Bstoke."/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamProfile name="Jon Coombs" role="Managing Director" image="jon.jpg" description="Jon Coombs is a top G and is well 
        known for his impeccable style and flawless physique. He is well known in the property world and the top don of Bstoke."/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamProfile name="Jon Coombs" role="Managing Director" image="jon.jpg" description="Jon Coombs is a top G and is well 
        known for his impeccable style and flawless physique. He is well known in the property world and the top don of Bstoke."/>
      </SwiperSlide>
      <SwiperSlide>
        <TeamProfile name="Jon Coombs" role="Managing Director" image="jon.jpg" description="Jon Coombs is a top G and is well 
        known for his impeccable style and flawless physique. He is well known in the property world and the top don of Bstoke."/>
      </SwiperSlide>
    </Swiper>
  )
}