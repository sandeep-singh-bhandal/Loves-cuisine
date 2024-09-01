"use client";
import Image from "next/image";
import styles from "./SpecialDish.module.scss";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react";

function SpecialDish({ title, subtitle, description, img }) {
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
            <div className="justify-center items-center mt-36 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-6xl p-8">
                <Image src="/images/menu.jpg" alt="menu" height={400} width={400}/>
                <div className="flex items-center justify-end p-6">
                  <button
                    className="text-black font-black ease-linear transition-all duration-150 absolute top-9 right-9 
                    text-3xl bg-gray-200 h-16 w-16 rounded-full"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
            <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
      <div className={styles["special-dish__image"]}>
        <Image
          src={img}
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
