import styles from '../styles/Car.module.css'
import { useEffect } from 'react'

const Car = ({plate, arriveTime, timeForCalculation}) => {
  const currentTime = () => {
    const today = new Date()
    let minute = today.getMinutes()
    minute = minute < 10 ? "0" + minute : minute
    const currentTime = today.getHours() * 60 + minute;
    return currentTime
  }

  const pricePerHour = 0.5 
  const price = (currentTime()- timeForCalculation) * pricePerHour

  return (
    <div className={styles.Car}>
        <p>
          <span>Plate: </span>
          <span className={styles.highlight}>{plate}</span>
        </p>
        <p>
          <span>Arrived at: </span>
          <span className={styles.highlight}>{arriveTime}</span>
        </p>
        <p>
          <span>Price: </span>
          <span className={styles.highlight}>&#36;{price}</span>
        </p>
    </div>
  )
}

export default Car;
