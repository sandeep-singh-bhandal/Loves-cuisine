import Stars from "./StarRating";
import styles from "./Dish.module.scss";
import Image from "next/image";

function Dish({ title, img, price, description, rating }) {
  return (
    <div className={styles.dish}>
      <Image
        className={`m-auto ${styles.dish__image}`}
        src={img}
        alt={title}
        width={250}
        height={250}
      />
      <h3 className={styles.dish__title}>{title}</h3>
      <Stars value={rating} />
    </div>
  );
}

export default Dish;
