import styles from '../styles/Table.module.css'
import Car from "./Car.jsx"
const Table = () => {
  return (
    <div className={styles.Table}>
      <Car/>
      <Car/>
      <Car/>
      <Car/>
      <Car/>
      <Car/>
    </div>
  )
}

export default Table
