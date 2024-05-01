import Card from "components/Card"
import Header from "components/Header"

import styles from "./page.module.css"

export default function Home() {
  const cards = [
    {
      id: 1,
      title: "use() hook to async load a resource",
      text: "It replaces useEffect() to fetch data",
      path: "/user"
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <Header />
      </div>

      <div className={styles.grid}>
        {
          cards.map(v => (
            <Card key={v.id} {...v} />
          ))
        }
      </div>
    </main>
  )
}
