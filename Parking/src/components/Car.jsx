import styles from '../styles/Car.module.css'

const Car = ({carPlate}) => {

  return (
    <div className={styles.Car}>
        <p>
          <span>Plate:</span>
          <span>{carPlate}</span>
        </p>
        <p>
          <span>Time:</span>
          <span>12:00</span>
        </p>
        <p>
          <span>Price:</span>
          <span>$100</span>
        </p>
    </div>
  )
}

export default Car;
