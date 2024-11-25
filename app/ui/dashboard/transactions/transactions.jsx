import Image from 'next/image'
import styles from './transactions.module.css'

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                
              <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
              Jane Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>24.11.2004</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                
              <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
              Jane Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>done</span>
            </td>
            <td>24.11.2004</td>
            <td>$3.200</td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                
              <Image src="/noavatar.png" alt='' width={40} height={40} className={styles.userImage} />
              Jane Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>cancelled</span>
            </td>
            <td>24.11.2004</td>
            <td>$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions