import SpecialDishes from './Home/SpecialDishes'
import Dishes from './Menu/Dishes'
import styles from './Main.module.scss'
import Footer from "./Footer/Footer"
import GoUpButton from "./GoUpButton/ScrollUp"

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes/>
      <Dishes />
      <Footer/>
      <GoUpButton/>
    </main>
  )
}

export default Main
