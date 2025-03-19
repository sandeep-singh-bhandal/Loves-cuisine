import SpecialDish from './SpecialDish'
import specialDishes from '@/utils/homePage'
import styles from './SpecialDishes.module.scss'

function SpecialDishes() {
  return (
    <section className={styles.home} id='home'>
        {specialDishes.map((item, index) => {
          return (
              <SpecialDish {...item} key={index} />
          )
        })}
    </section>
  )
}

export default SpecialDishes
