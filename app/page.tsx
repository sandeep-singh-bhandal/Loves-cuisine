import React from 'react'
import styles from '@/styles/pages/Home.module.scss'
import Header from '@/components/Header/Header'
import Main from '@/components/Main'
import "@fortawesome/fontawesome-svg-core/styles.css";

const Home = () => {
  return (
    <div className={styles.container}>
    <Header />
    <Main />
  </div>
  )
}

export default Home
