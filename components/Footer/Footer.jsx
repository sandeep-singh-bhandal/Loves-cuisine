import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__column}>
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
          <h3 className={styles.title}>contact info</h3>
          <a className={styles.footer__link}>
            +1 (206) 419-9372
          </a>
          <a className={styles.footer__link}>
            +1 (206) 419-9372
          </a>
          <a className={styles.footer__link}>
            lovesyummycuisine@gmail.com
          </a>
          <a className={styles.footer__link}>
            27433 227th PI SE <br />
            Maple Valley, WA 98038
          </a>
        </div>
        <div className={styles.footer__column}>
          <h3 className={styles.title}>follow us</h3>
          <a href="#" className={styles.footer__link}>
            Facebook
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B12064199372&text&type=phone_number&app_absent=0"
            target="_blank"
            className={styles.footer__link}
          >
            Whatsapp
          </a>
          <a href="#" className={styles.footer__link}>
            Instagram
          </a>
        </div>
      </div>
      <div className={styles.footer__credit}>
        Copyright @ 2022 by <a href="#">Loves's Yummy Cuisine</a>
      </div>
    </footer>
  );
}

export default Footer;
