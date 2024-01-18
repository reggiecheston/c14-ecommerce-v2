import React from "react";
import "../styles/index.css";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function Home() {
  return (
    <div class="hero-section">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        <SwiperSlide>
          <div class="hero-section__slide" id="slide-1">
            <div className="hero-section__text">
              <h2 className="hero-section__text--header">
                Simplicity meets luxury
              </h2>
              <Link
                to="/shop"
                relative="path"
                className="hero-section__text--copy"
              >
                Shop All
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero-section__slide" id="slide-2">
            <div className="hero-section__text">
              <h2 className="hero-section__text--header">
                Pierre Paulin - Pacha Chairs
              </h2>
              <Link
                to="/shop"
                relative="path"
                className="hero-section__text--copy"
                state={{ filter: "accent chairs" }}
              >
                Shop Accent Chairs
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero-section__slide" id="slide-3">
            <div className="hero-section__text">
              <h2 className="hero-section__text--header">
                Mario Bellini - Modular Sofa
              </h2>
              <Link
                to="/shop"
                relative="path"
                className="hero-section__text--copy"
                state={{ filter: "sofas" }}
              >
                Shop Sofas
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero-section__slide" id="slide-4">
            <div className="hero-section__text">
              <h2 className="hero-section__text--header">
                GamFratesi - Epic Coffee Table
              </h2>
              <Link
                to="/shop"
                relative="path"
                className="hero-section__text--copy"
                state={{ filter: "coffee tables" }}
              >
                Shop Coffee Tables
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="hero-section__slide" id="slide-5">
            <div className="hero-section__text">
              <h2 className="hero-section__text--header">
                Ceramicah - Tera Lamp
              </h2>
              <Link
                to="/shop"
                relative="path"
                className="hero-section__text--copy"
                state={{ filter: "lamps" }}
              >
                Shop Lamps
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
