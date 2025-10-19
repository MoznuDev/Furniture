import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { reviews } from "./../../../utils/reviews";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import Rating from "../../Rating";

const Testimonials = () => {
  return (
    <section className="max-w-screen-2xl px-8 py-20 mx-auto my-44">
      <div className="text-center m-auto">
        <h2 className="uppercase text-lg font-semibold mb-4 text-primary">
          Testimonials
        </h2>
        <h3 className="capitalize text-4xl mb-8 font-bold">
          Our Client Reviews
        </h3>
        {/* Review Card  */}
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="md:max-w-7xl mx-auto relative rounded"
      >
        
          {reviews.map((review, index) => (
            <SwiperSlide
              key={index}
              style={{ backgroundImage: `url(${review.coverImg})` }}
              className="mySwiper bg-cover bg-center bg-no-repeat rounded-xl mb-4"
            >
              <div className="md:h-[547px] flex justify-center items-center p-4">
                <div className="mt-16 mb-5 bg-white rounded-xl md:w-4/5 w-fit p-4 relative m-auto">
                  <img
                    src={review.image}
                    alt=""
                    className="size-20 -top-10 ring-2 rounded-full ring-primary object-center left-1/2 absolute -translate-x-1/2"
                  />
                  <div className="mt-16 text-center">
                    <h3 className="text-lg font-semibold dark:text-black">
                      {review.name}
                    </h3>
                    <p className="mb-3 dark:text-black">Verified Customer</p>
                    <p className="mb-4 mx-8 text-gray-600 dark:text-black">
                      {review.review}
                    </p>
                    <div className="text-center flex justify-center w-full items-center mx-auto mb-2">
                      <Rating rating={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        
      </Swiper>
    </section>
  );
};

export default Testimonials;
