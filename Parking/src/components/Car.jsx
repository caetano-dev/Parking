import styles from '../styles/Car.module.css'

const Car = ({plate, time}) => {

  return (
    <div className={styles.Car}>
        <p>
          <span>Plate:</span>
          <span>{plate}</span>
        </p>
        <p>
          <span>Time:</span>
          <span>{time}</span>
        </p>
        <p>
          <span>Price:</span>
          <span>$100</span>
        </p>
    </div>
  )
}

export default Car;
