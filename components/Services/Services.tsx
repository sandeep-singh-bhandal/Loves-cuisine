import Card from "./Card";
import serviceList from "@/utils/serviceList";
import styles from "./Services.module.scss";

function Services() {
  return (
    <section className={`${styles.dishes} bg-[#eee]`} id="services">
      <h1 className="text-7xl text-center mt-10">Our Services</h1>
      <div className={styles["dishes__container"]}>
        {serviceList.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
      </div>
    </section>
  );
}

export default Services;
