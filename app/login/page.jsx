import styles from '/app/ui/login/login.module.css'

const Loginpage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="username" placeholder='username' />
        <input type="password" placeholder='password' />
        <button>Login</button>
      </form>
    </div>
  )
}

export default Loginpage