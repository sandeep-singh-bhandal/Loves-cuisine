import styles from './Loader.module.scss'

function Loader() {
  return (
    <div className={styles.loader}>
      <img src='/images/loader.gif' alt='loader' />
    </div>
  )
}

export default Loader
