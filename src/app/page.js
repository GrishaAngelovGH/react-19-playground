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
    },
    {
      id: 2,
      title: "use() hook to stream data from the server to the client",
      text: "Data can be streamed from the server to the client by passing a Promise as a prop from a Server Component to a Client Component",
      path: "/products"
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
