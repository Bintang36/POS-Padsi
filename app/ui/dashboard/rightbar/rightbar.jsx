import Image from 'next/image'
import styles from './rightbar.module.css'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt='' fill className={styles.bg} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Avaliable Now</span>
          <h3 className={styles.title}>How to Use</h3>
          <span className={styles.subtitle}>only 4 minutes</span>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, dicta optio. Voluptatum ut ad omnis explicabo? Non maiores nostrum fugiat officiis nihil vero veniam facere deserunt tempore doloribus! Fugiat, doloribus?</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>After Now</span>
          <h3 className={styles.title}>How to Use</h3>
          <span className={styles.subtitle}>only 4 minutes</span>
          <p className={styles.desc}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, dicta optio. Voluptatum ut ad omnis explicabo? Non maiores nostrum fugiat officiis nihil vero veniam facere deserunt tempore doloribus! Fugiat, doloribus?</p>
          <button className={styles.button}>
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar