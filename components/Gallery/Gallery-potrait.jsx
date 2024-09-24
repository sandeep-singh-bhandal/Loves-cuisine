"use client";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item mx-6" data-value="1">
    <Image
      src="/images/gallery-2.jpg"
      alt=""
      width={500}
      height={500}
    />
  </div>,
  <div className="item mx-6" data-value="1">
    <Image
      src="/images/gallery-2.jpg"
      alt=""
      width={500}
      height={500}
    />
  </div>,
  <div className="item mx-6" data-value="1">
    <Image
      src="/images/gallery-2.jpg"
      alt=""
      width={500}
      height={500}
    />
  </div>,
  <div className="item mx-6" data-value="1">
    <Image
      src="/images/gallery-2.jpg"
      alt=""
      width={500}
      height={500}
    />
  </div>,
];

const Gallery = () => (
    <AliceCarousel
      mouseTracking
      items={items}
      key={items}
      responsive={responsive}
      controlsStrategy="alternate"
      disableDotsControls="true"
    />
);
export default Gallery;
