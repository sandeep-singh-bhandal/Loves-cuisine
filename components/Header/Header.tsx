"use client";
import classNames from "classnames";
import { useEffect, useState } from "react";
import menuItems from "@/utils/menuItems";
import styles from "./Header.module.scss";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const menuIcon = document.querySelector("#menu-bars");
      menuIcon?.classList.add("fa-bars");
      menuIcon?.classList.remove("fa-times");
      setToggleMenu(false);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const sectionList = document.querySelectorAll("section");
      sectionList.forEach((section) => {
        const id = section.getAttribute("id");
        const menuItem = document.querySelector(`header nav a[href="#${id}"]`);
        if (menuItem) {
          const scrollY = window.scrollY;
          const sectionTop = section.offsetTop - 150;
          const activeLinkClass = classNames(styles["active-link"]);
          if (
            scrollY > sectionTop &&
            scrollY <= sectionTop + section.offsetHeight
          ) {
            menuItem.classList.add(activeLinkClass);
          } else {
            menuItem.classList.remove(activeLinkClass);
          }
        }
      });
    });
  }, []);

  const onMenuClick = () => {
    setToggleMenu(!toggleMenu);
    const menuIcon = document.querySelector("#menu-bars");
    menuIcon?.classList.toggle("bx-menu", toggleMenu);
    menuIcon?.classList.toggle("bx-x", !toggleMenu);
  };

  return (
    <header className={styles.header}>
      <a href="#" className={styles.header__logo}>
        Loves&apos;s Cuisine
      </a>
      <nav
        id="nav"
        className={classNames(styles.header__nav, {
          [styles["show-menu"]]: toggleMenu,
        })}
      >
        {menuItems.map((item) => {
          return (
            <a
              key={item.id}
              href={item.href}
              className={classNames(styles["header__nav-link"], {
                [styles["active-link"]]: item.active,
              })}
              onClick={onMenuClick}
            >
              {item.name}
            </a>
          );
        })}
      </nav>
      <div className={styles.header__icons}>
        <span
          id="menu-bars"
          className={classNames("bx bx-menu bg-stone-200 text-black hover:bg-red-600 hover:text-white", styles.menu)}
          onClick={onMenuClick}
        />
        <a
          href="https://api.whatsapp.com/send/?phone=%2B12064199372&text&type=phone_number&app_absent=0"
          target="_blank"
        >
          <span className="bx bxl-whatsapp bg-green-500 text-white hover:bg-green-400" />
        </a>
      </div>
    </header>
  );
}

export default Header;
