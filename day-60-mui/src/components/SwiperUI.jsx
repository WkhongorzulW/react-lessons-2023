import { useRef } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../data/image";
import { Thumbs } from "swiper";

const SwiperUI = function () {
  const [thumbSwiper, setThumbSwiper] = useState(null);
  const swiperRef = useRef(null);
  const slides = images.map((image, index) => {
    return (
      <SwiperSlide>
        <img key={index} src={image.url} alt="img" width={300} height={400} />
      </SwiperSlide>
    );
  });
  return (
    <h1>
      <h4>DAY-60 Swiper JS with React</h4>
      <Swiper
        modules={[Thumbs]}
        spaceBetween={50}
        navigation={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        thumbs={{ swiper: thumbSwiper }}
      >
        {slides}
      </Swiper>
      <Swiper
        modules={[Thumbs]}
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log("slide change")}
        onSwiper={setThumbSwiper}
      >
        {slides}
      </Swiper>
    </h1>
  );
};

export { SwiperUI };
