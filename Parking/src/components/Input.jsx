import styles from '../styles/Input.module.css'
import { createRef, useState } from 'react'
import Car from "./Car.jsx"

const Input = () => {

  const [carPlates, setCarPlates] = useState([])

  let textInput = createRef()

  const handleClick = () => {
    console.log(textInput.current.value)
    setCarPlates([...carPlates, textInput.current.value])
  }

  return (
    <>
    <div className={styles.Input}>
    <input type="text" ref={textInput} placeholder="Car plate" />
    <button onClick={handleClick}>Add</button>
    </div>
    <section>
    {carPlates.map((carPlate, index) => <Car key={index} carPlate={carPlate} />)}
    </section>
    </>
  )
}

export default Input;
