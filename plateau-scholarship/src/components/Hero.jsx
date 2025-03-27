"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const ImageSlider = () => {
  return (
    <div className="py-24 px-6 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Plateau Scholarship Program
        </h2>
        <p className="text-lg text-gray-600 font-mono leading-relaxed">
          The Plateau Scholarship is a financial aid program designed to support
          students, often from the Plateau State region of Nigeria, in pursuing
          higher education. It is typically offered by the Plateau State Government 
          or other educational foundations to help students with tuition fees, accommodation, 
          and academic expenses.
        </p>
      </div>

      {/* Swiper Image Slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-4xl mx-auto mt-8"
      >
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/7092350/pexels-photo-7092350.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Student 1"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/8423014/pexels-photo-8423014.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Student 2"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/6936079/pexels-photo-6936079.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Student 3"
            className="w-full h-[400px] object-cover rounded-lg shadow-md"
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <p className="flex justify-center py-6 text-sm">&#169; 2025</p>
      </div>
    </div>
  );
};

export default ImageSlider;
