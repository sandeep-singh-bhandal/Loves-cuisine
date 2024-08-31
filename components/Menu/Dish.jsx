import Stars from './StarRating'
import styles from './Dish.module.scss'
import Image from 'next/image'

function Dish({ title, img, price, description,rating }) {
  return (
    <div className={styles.dish}>
      <Image className={styles.dish__image} src={img} alt={title} />
      <h3 className={styles.dish__title}>{title}</h3>
      {description ? (
        <p className={styles.dish__description}>{description}</p>
      ) : null}
      <Stars value={rating} />
      <span className={styles.dish__price}>{`$${price}`}</span>
    </div>
  )
}

export default Dish
