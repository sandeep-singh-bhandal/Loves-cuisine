"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Card.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Card({ title,description, icon }:{title:string,description:string,icon:IconProp}) {
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
