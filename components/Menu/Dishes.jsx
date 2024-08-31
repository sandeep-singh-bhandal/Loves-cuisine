import Dish from "./Dish";
import dishList from "@/utils/dishList";
import styles from "./Dishes.module.scss";

function Dishes() {
  return (
    <section className={styles.dishes} id="menu">
      <h3 className="sub-heading">our menu</h3>
      <h1 className="heading">Menu Collection</h1>
      <p className="para">
        Best Quality Disposal Utensils Provided & We Also Provide Best Quality
        Crockery <br />
        Final Price Based On Items Chosen
      </p>
      <div className={styles["dishes__container"]}>
        {dishList.map((item, index) => {
          return <Dish key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Dishes;
