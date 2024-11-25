import Image from "next/image"
import Link from "next/link"
import styles from "/app/ui/dashboard/products/products.module.css"
import Search from "/app/ui/dashboard/search/search"
import Pagination from "/app/ui/dashboard/paginations/pagination"

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="search for a product..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Created At</td>
            <td>Price</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage} />
                Kue
              </div>
            </td>
            <td>desc</td>
            <td>Rp.100,000</td>
            <td>25.11.2024</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                  <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductPage