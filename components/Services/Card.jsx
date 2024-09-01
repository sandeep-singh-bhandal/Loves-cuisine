"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.scss";

function Card({ title,description, icon }) {
  return (
    <div className={styles.dish}>
      <FontAwesomeIcon
        icon={icon}
        className={` ${styles.dish__icon} text-green-600`}
      />
      <h3 className={styles.dish__title}>{title}</h3>
      {description ? (
        <p className={styles.dish__description}>{description}</p>
      ) : null}
    </div>
  );
}

export default Card;
