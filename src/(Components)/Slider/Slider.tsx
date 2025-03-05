"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "./Slider.module.scss";

function Slider() {
  //region data
  const slidesData = [
    {
      id: 1,
      image: "/sliderImage.png",
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
  //endregion

  //region hooks
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.offsetWidth;
      const offset = (slideWidth / slidesData.length) * activeIndex * 2;
      sliderRef.current.style.transform = `translateX(${-offset + 220}px)`;
    }
  }, [activeIndex]);

  //endregion

  //region function
  function handleSliderButtonClick(index: number): void {
    setActiveIndex(index);
  }
  //endregion

  return (
    <div
      className={`container ${style.sliderContainer} d-none d-xl-flex flex-column gap-custom-12 overflow-hidden`}
    >
      <div
        className="mt-custom-24 "
        ref={sliderRef}
        style={{ transition: "transform 0.5s ease" }}
      >
        <div className="d-flex gap-custom-3 w-100" style={{ height: "432px" }}>
          {slidesData.map((data) => (
            <div
              key={data.id}
              className="col col-8 rounded-5 position-relative overflow-hidden "
              style={{ borderRadius: "56px" }}
            >
              <div
                className="position-absolute top-0 start-0 w-100 h-100 bg-dark"
                style={{ opacity: "60%" }}
              ></div>
              <Image
                className="img-fluid w-100"
                src={data.image}
                alt={data.title}
                width={816}
                height={432}
              />
              <div className="d-flex flex-column gap-custom-8 justify-content-center position-absolute text-white px-custom-16 top-0 start-0 w-100 h-100">
                <h2 className=" fw-bolder fs-custom-9">{data.title}</h2>
                <p className="fw-normal fs-4">{data.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-center" style={{ gap: "10px" }}>
        {slidesData.map((data, index) => (
          <div
            role="button"
            className={`${activeIndex === index ? "bg-custom-primary" : "bg-custom-slider-inactive-button"}`}
            style={{ width: "20px", height: "4px", borderRadius: "2px" }}
            key={data.id}
            onClick={() => handleSliderButtonClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
