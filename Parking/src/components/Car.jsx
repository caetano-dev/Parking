import styles from '../styles/Car.module.css'
import { useState, useEffect } from 'react'

const Car = ({plate, arriveTime, timeForCalculation}) => {

  const [updatedTime, setUpdatedTime] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setUpdatedTime(currentTime())
    }, 600)
    return () => clearInterval(interval)
  }, [])

  const currentTime = () => {
    const today = new Date()
    const currentTime = today.getHours() * 60 + today.getMinutes();
    return currentTime
  }

  const price = (100 * (updatedTime - timeForCalculation) / 60).toFixed(2)

  return (
    <div className={styles.Car}>
        <p>
          <span>Plate: </span>
          <span>{plate}</span>
        </p>
        <p>
          <span>Arrived at: </span>
          <span>{arriveTime}</span>
        </p>
        <p>
          <span>Price: </span>
          <span>{price}</span>
        </p>
    </div>
  )
}

export default Car;
