import { use } from "react"

import { ThemeContext } from "../UIThemeProvider"

import styles from "./Card.module.css"
import commonStyles from "components/common.module.css"

const Card = () => {
  const { value, toggleValue } = use(ThemeContext)

  return (
    <div className={commonStyles.container}>
      <div className={`${styles.cardBody} ${value === "light" ? `${styles.bgLight} ${styles.textDark}` : `${styles.bgDark} ${styles.textLight}`}`}>
        <h1>Card</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium pariatur ipsa maiores temporibus consectetur eos neque quis magnam ab tenetur. Animi consectetur sequi ratione pariatur modi? Officia fugit, porro sapiente?</p>
        <button className={styles.button} onClick={toggleValue}>Activate {value === "light" ? "Dark" : "Light"} Mode</button>
      </div>
    </div>
  )
}

export default Card