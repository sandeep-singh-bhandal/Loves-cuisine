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
    <footer className={styles.footer} id="contact">
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
            27433 227th PI SE <br />
            Maple Valley, WA 98038
          </a>
        </div>
        <div className={styles.footer__column}>
          <span className={styles.footer__icon}>
            <FontAwesomeIcon icon={faHandPointer} />
          </span>
          <h3 className={styles.title}>follow us</h3>
          <a href="https://www.facebook.com/Lovesyummyindiancuisine?mibextid=ZbWKwL" className={styles.footer__social}>
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
        Copyright @ 2022 by <a href="#">Loves&apos;s Yummy Cuisine</a>
      </div>
    </footer>
  );
}

export default Footer;
