import Link from "next/link"

import styles from "./Card.module.css"

const Card = ({ title, text, path }) => (
  <Link
    href={path}
    className={styles.card}
  >
    <h2>{title}</h2>
    <p>{text}</p>
  </Link>
)

export default Card