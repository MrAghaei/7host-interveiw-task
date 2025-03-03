"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image: "/sliderImage.png", // Replace with actual images
    title: "Risk-free 30 day trial to level up your team’s productivity.",
    description:
      "Get started now and take advantage of our 30-day free trial today. No credit card required.",
  },
  {
    id: 2,
    image: "/sliderImage.png",
    title: "Boost collaboration with real-time team updates.",
    description:
      "Stay connected and get instant insights on your team’s workflow.",
  },
  {
    id: 3,
    image: "/sliderImage.png",
    title: "Manage tasks effortlessly with our intuitive dashboard.",
    description:
      "Streamline your workflow with a user-friendly interface and powerful tools.",
  },
];

export default function BootstrapSlider() {
  return (
    <div className="container py-4 mt-custom-24">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000 }}
        pagination={{ clickable: true }}
        className="rounded-3"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="position-relative rounded-4 overflow-hidden shadow-lg">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-100 d-block opacity-75"
                style={{ height: "320px", objectFit: "cover" }}
              />
              <div className="position-absolute top-50 start-50 translate-middle text-white text-center px-4">
                <h2 className="fs-4 fw-bold">{slide.title}</h2>
                <p className="fs-6">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
