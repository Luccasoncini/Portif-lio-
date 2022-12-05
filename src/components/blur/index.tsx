import { useBlur } from "../../hooks/useBlur"
import "./blur.scss"
import { motion } from "framer-motion"
import { fadeIn } from "../../Animation"
import { useMenu } from "../../hooks/useMenu"

export function Blur() {
  const { isBlur, setIsBlur } = useBlur()
  const { isMenuOpened, setIsMenuOpened } = useMenu()

  const onClickBlur = () => {
    setIsBlur(false)
    if (isMenuOpened === true) {
      setIsMenuOpened(!isMenuOpened)
    }
  }

  return (
    <>
      {isBlur ? (
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          onClick={onClickBlur}
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeIn}
          className="blur"
        ></motion.div>
      ) : null}
    </>
  )
}
