import React from 'react'
import styles from '@/styles/pages/Home.module.scss'
import Header from '@/components/Header/Header'
import Main from '@/components/Main'


const Home = () => {
  return (
    <div className={styles.container}>
    <Header />
    <Main />
  </div>
  )
}

export default Home
