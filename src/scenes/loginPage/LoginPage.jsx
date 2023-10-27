import styles from "./loginPage.module.scss";
import Form from "./Form";
function LoginPage() {
  return (
    <div>
      <div className={styles.nav}>
        <div className="container">
          <div>
            <h1>cligo</h1>
          </div>
        </div>
      </div>
      <div>
        <Form/>
      </div>
    </div>
  )
}

export default LoginPage
