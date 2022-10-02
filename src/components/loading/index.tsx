import { useEffect, useState } from "react"
import "./loading.scss"
import { motion } from "framer-motion"

export function Loading() {
  const [activeCircle, setActiveCircle] = useState(1)
  const [isFirstCircle, setIsFirstCircle] = useState(true)
  const [isSecondCircle, setIsSecondCircle] = useState(false)
  const [isThirdCircle, setIsThirdCircle] = useState(false)
  const [gravityCirclesQuantity, setGravityCirclesQuantity] = useState(0)
  const [gravityCircles, setGravityCircles] = useState<number[]>([])

  useEffect(() => {
    const newGravityCircles = [...gravityCircles, 1]
    setGravityCircles(newGravityCircles)
  }, [gravityCirclesQuantity])

  setTimeout(() => {
    if (activeCircle != 3) {
      setActiveCircle(activeCircle + 1)
    } else {
      setActiveCircle(1)
      setGravityCirclesQuantity(gravityCirclesQuantity + 1)
    }
  }, 250)

  useEffect(() => {
    switch (activeCircle) {
      case 1:
        setIsFirstCircle(true)
        setIsSecondCircle(false)
        setIsThirdCircle(false)
        break
      case 2:
        setIsFirstCircle(false)
        setIsSecondCircle(true)
        setIsThirdCircle(false)
        break
      case 3:
        setIsFirstCircle(false)
        setIsSecondCircle(false)
        setIsThirdCircle(true)
        break
      default:
        console.log("Deu algum problema na lógica do loading")
    }
  }, [activeCircle])

  return (
    <div className="loading-div">
      <div className="loading-content">
        <div className={`circle ${isFirstCircle ? "active" : ""}`}></div>
        <div className={`circle ${isSecondCircle ? "active" : ""}`}></div>
        <div className={`circle ${isThirdCircle ? "active" : ""}`}></div>
        {gravityCircles.map(() => {
          return (
            <motion.div
              animate={{
                scale: [0, 1, 1, 1],
                x: [0, 0, 0, 1000],
                y: [0, 0, 450, 450]
              }}
              transition={{
                duration: 3
              }}
              className="circle-gravity gravity"
            ></motion.div>
          )
        })}
      </div>
    </div>
  )
}
