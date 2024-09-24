import SpecialDishes from './Home/SpecialDishes'
import Dishes from './Menu/Dishes'
import styles from './Main.module.scss'
import Footer from "./Footer/Footer"
import GoUpButton from "./GoUpButton/ScrollUp"
import Services from "./Services/Services"
import GalleryLandscape from "./Gallery/Gallery-landscape"
import GalleryPotrait from "./Gallery/Gallery-potrait"

function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes/>
      <Dishes />
      <GalleryLandscape/>
      <GalleryPotrait/>
      <Services/>
      <Footer/>
      <GoUpButton/>
    </main>
  )
}

export default Main
