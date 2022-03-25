import styles from '../styles/Input.module.css'
import { createRef, useState } from 'react'
import Car from "./Car.jsx"

const Input = () => {

  const [carObject, setCarObject] = useState([])

  const addCar = (plate, time) => {
    const car = {
      plate: plate,
      time: time
    }
    setCarObject(carObject.concat(car))
  }

  let textInput = createRef()

  const CreateDate = () => {
    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()
    return `${hour}:${minute}`
  }

  const handleClick = () => {
    if (textInput.current.value.length === 7) {
      const time = CreateDate()
      addCar(textInput.current.value, time)
    }
  }

  return (
    <>
    <div className={styles.Input}>
    <input type="text" ref={textInput} placeholder="Car plate" />
    <button onClick={handleClick}>Add</button>
    </div>
    <section>
     {carObject.map((car, index) => <Car key={index} plate={car.plate} time={car.time}/>)}
    </section>
    </>
  )
}

export default Input;
