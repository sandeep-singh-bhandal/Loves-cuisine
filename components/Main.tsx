import SpecialDishes from './Home/SpecialDishes'
import Dishes from './Menu/Dishes'
import styles from './Main.module.scss'
import Footer from "./Footer/Footer"
import GoUpButton from "./GoUpButton/ScrollUp"
import Services from "./Services/Services"
// import GalleryLandscape from "./Gallery/Gallery-landscape"
// import Carousel from "./Gallery/Gallery-potrait"

// const DATA = [
//   { image: "/images/gallery-1.jpg" },
//   { image: "/images/gallery-1.jpg" }, 
//   { image: "/images/gallery-1.jpg" }]


function Main() {
  return (
    <main className={styles.main}>
      <SpecialDishes/>
      <Dishes />
      {/* <GalleryLandscape/> */}
      {/* <GalleryPotrait/> */}
      {/* <main className=" flex flex-col text-center justify-center items-center">
      <Carousel data={DATA} />
      </main> */}
      <Services/>
      <Footer/>
      <GoUpButton/>
    </main>
  )
}

export default Main
