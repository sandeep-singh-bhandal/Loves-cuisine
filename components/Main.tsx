import SpecialDishes from './Home/SpecialDishes'
import Dishes from './Menu/Dishes'
import styles from './Main.module.scss'
import Footer from "./Footer/Footer"
import GoUpButton from "./GoUpButton/ScrollUp"
import Services from "./Services/Services"
import TiffinService from './TiffinService/TiffinService'

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes/>
      <TiffinService/>
      <Dishes/>
      <Services/>
      <Footer/>
      <GoUpButton/>
    </main>
  )
}

export default Main
