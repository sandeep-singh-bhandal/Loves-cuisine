import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Footer.module.scss";
import {
  faContactBook,
  faHandPointer,
  faLink,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <section className={styles.footer} id="contact">
      <h1 className="text-center text-8xl text-red-500 font-black">
        Contact Us
      </h1>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
          <span className={styles.footer__icon}>
            <FontAwesomeIcon icon={faLink} />
          </span>
          <h3 className={styles.title}>quick links</h3>
          <a href="#home" className={styles.footer__link}>
            Home
          </a>
          <a href="#services" className={styles.footer__link}>
            Services
          </a>
          <a href="#menu" className={styles.footer__link}>
            Menu
          </a>
          <a href="#contact" className={styles.footer__link}>
            Contact
          </a>
        </div>
        <div className={styles.footer__column}>
          <span className={styles.footer__icon}>
            <FontAwesomeIcon icon={faContactBook} />
          </span>
          <h3 className={styles.title}>contact info</h3>
          <a className={styles.footer__link}>+1 (206) 419-9372</a>
          <a className={styles.footer__link}>+1 (206) 419-9372</a>
          <a className={styles.footer__link}>lovesyummycuisine@gmail.com</a>
          <a className={styles.footer__link}>
            26028 204th Ave SE,
            <br /> Covington, WA 98042
          </a>
        </div>
        <div className={styles.footer__column}>
          <span className={styles.footer__icon}>
            <FontAwesomeIcon icon={faHandPointer} />
          </span>
          <h3 className={styles.title}>follow us</h3>
          <a
            href="https://www.facebook.com/Lovesyummyindiancuisine?mibextid=ZbWKwL"
            className={styles.footer__social}
          >
            <FontAwesomeIcon icon={faFacebook} className="mx-2 text-4xl" />
            Facebook
          </a>
          <a
            href="https://www.tiktok.com/@lovenagra1?_t=8q8GIXYiJ7C&_r=1"
            target="_blank"
            className={styles.footer__social}
          >
            <FontAwesomeIcon icon={faTiktok} className="mx-2 text-4xl" />
            Tik Tok
          </a>
          <a
            href="https://www.instagram.com/love_s_cuisine/"
            className={styles.footer__social}
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} className="mx-2 text-4xl" />
            Instagram
          </a>
        </div>
      </div>
      <div className={styles.footer__credit}>
        <p>
          Copyright @ 2022 by{" "}
          <span className="text-[#fd0103]">Loves&apos;s Yummy Cuisine. </span>All rights reserved |
          Designed and Developed by{" "}
          <a
            target="_blank"
            className="text-blue-500 underline lowercase hover:text-blue-700"
            href="https://portfolio-eight-green-32.vercel.app/"
          >
            sandeepbhandal.in
          </a>
        </p>
      </div>
    </section>
  );
}

export default Footer;
