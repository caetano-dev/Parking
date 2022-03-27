import styles from '../styles/Input.module.css'
import { createRef, useState } from 'react'
import Car from "./Car.jsx"
import TotalCars from "./TotalCars.jsx"

const Input = () => {

  const [carObject, setCarObject] = useState([])

  const addCar = (plate, arriveTime, timeForCalculation) => {
    const car = {
      plate: plate,
      arrivedAt: arriveTime,
      timeForCalculation: timeForCalculation 
    }
    setCarObject(carObject.concat(car))
  }

  let textInput = createRef()

  const getArriveTime = () => {
    const today = new Date()
    const hour = today.getHours()
    let minute = today.getMinutes()
    minute = minute < 10 ? "0" + minute : minute
    const timeForCalculation = hour * 60 + minute;
    return [`${hour}:${minute}`, timeForCalculation]
  }

  const checkIfCarIsNew = () => {
    const plate = textInput.current.value
    const isNew = carObject.filter(car => car.plate === plate).length === 0
    return isNew
  }

  const handleClick = () => {
    if (textInput.current.value.length === 7 && checkIfCarIsNew()) {
      addCar(textInput.current.value, ...getArriveTime())
      textInput.current.value = ''
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleClick()
    }
  }

  return (
    <>
      <div className={styles.Input}>
        <input type="text" ref={textInput} onKeyPress={handleKeyPress} placeholder="Car plate" />
        <button onClick={handleClick}>Add</button>
      </div>
      <TotalCars Total={carObject.length} />
      <section>
        {carObject.map((car, index) => <Car key={index} plate={car.plate} arriveTime={car.arrivedAt} timeForCalculation={car.timeForCalculation}/>)}
      </section>
    </>
  )
}

export default Input;
