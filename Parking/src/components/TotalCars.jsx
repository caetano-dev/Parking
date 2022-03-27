import styles from '../styles/TotalCars.module.css'

const TotalCars = (Total) => {

  return (
      <div className={styles.TotalCars}>
        <span>Total:</span>
        <span>{Total.Total}</span>
      </div>
  )
}

export default TotalCars
