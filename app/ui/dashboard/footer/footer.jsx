import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Slaina</div>
        <div className={styles.text}>Copyright</div>
    </div>
  )
}

export default Footer