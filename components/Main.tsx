import SpecialDishes from './Home/SpecialDishes'
import Dishes from './Menu/Dishes'
import styles from './Main.module.scss'
import Footer from "./Footer/Footer"
import GoUpButton from "./GoUpButton/ScrollUp"
import Services from "./Services/Services"
import PosterSection from './PosterSection/PosterSection'

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes/>
      <PosterSection/>
      <Dishes/>
      <Services/>
      <Footer/>
      <GoUpButton/>
    </main>
  )
}

export default Main
