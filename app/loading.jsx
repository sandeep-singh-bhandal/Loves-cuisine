import styles from './Loader.module.scss'
import Image from 'next/image'

function Loader() {
  return (
    <div className={styles.loader}>
      <Image src='/images/loader.gif' alt='loader' width={100} height={100}/>
    </div>
  )
}

export default Loader
