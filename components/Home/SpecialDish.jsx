"use client";
import Image from "next/image";
import styles from "./SpecialDish.module.scss";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";

function SpecialDish({ title, subtitle, description, image }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className={styles["special-dish"]}>
      <div className={styles["special-dish__content"]}>
        <span className={styles["special-dish__subtitle"]}>{subtitle}</span>
        <h3 className={styles["special-dish__title"]}>{title}</h3>
        <p className={styles["special-dish__description"]}>{description}</p>
        <button
          className="button"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Explore Complete Menu
        </button>
        {showModal ? (
          <>
            <div className="mt-36 overflow-x-hidden flex justify-center overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className={styles["special-dish__menuImgDiv"]}>
              <button
                  className="text-black font-black ease-linear transition-all duration-150 absolute right-4 top-4 
                    text-3xl bg-gray-200 h-12 w-12 rounded-full"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  X
                </button>
                <Image
                  src="/images/menu1.jpg"
                  alt="menu"
                  height={400}
                  width={400}
                />
                <Image
                  src="/images/menu2.jpg"
                  alt="menu"
                  height={400}
                  width={400}
                />
                <Image
                  src="/images/menu3.jpg"
                  alt="menu"
                  height={400}
                  width={400}
                />
              </div>
            </div>
            <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <div className={styles["special-dish__image"]}>
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          width={2000}
          height={2000}
        />
      </div>
    </div>
  );
}

export default SpecialDish;
