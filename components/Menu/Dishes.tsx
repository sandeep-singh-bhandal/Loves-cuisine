"use client";
import Dish from "./Dish";
import CarouselLandscape from "../Gallery/Carousel-Landscape";
import CarouselPotrait from "../Gallery/Carousel-Potrait";
import dishList from "@/utils/dishList";
import styles from "./Dishes.module.scss";
import { useState } from "react";
import menuCategory from "../../utils/menuCategory";
import clsx from "clsx";

function Dishes() {
  const [category, setCategory] = useState<string>("Non Veg");
  return (
    <>
      <section className={styles.dishes} id="menu">
        <h3 className="sub-heading">our menu</h3>
        <h1 className="heading">Menu Collection</h1>
        <p className="para">
          Best Quality Disposal Utensils Provided & We Also Provide Best Quality
          Crockery <br />
          Final Price Based On Items Chosen
        </p>
        <h1 className="text-center text-4xl mb-4">
          Explore Different Categories
        </h1>
        <div className="flex justify-center items-center">
          {menuCategory.map((item) => {
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCategory(item.category);
                  menuCategory.forEach((element) => {
                    if (item.active === true) {
                      element.active = false;
                      item.active = true;
                    }
                    if (item.active === false) {
                      item.active = true;
                      element.active = false;
                    }
                  });
                }}

                className={clsx(`text-3xl rounded-xl mx-6 mb-12 p-3 
                  hover:bg-[#fd0103] hover:text-white`,
                  item.active===true?"text-white bg-[#fd0103]":"text-gray-500 bg-transparent")}
                >
                {item.category}
              </button>
            );
          })}
        </div>
        <div className={styles["dishes__container"]}>
          {dishList.map((item, index) => {
            if (item.category === category) {
              return <Dish key={index} {...item} />;
            }
          })}
        </div>
      </section>
      <section id="gallery">
        <h1 className="text-7xl text-center my-6">Our Gallery</h1>
        <CarouselLandscape />
        <CarouselPotrait />
      </section>
    </>
  );
}

export default Dishes;
