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
    },
    {
      id: 3,
      title: "use() hook to read a context",
      text: "It replaces useContext() to read a context",
      path: "/theme"
    },
    {
      id: 4,
      title: "using a form action to handle submitted data from a form",
      text: "Read the values from formData passed to the action",
      path: "/product-list"
    },
    {
      id: 5,
      title: "useActionState() hook",
      text: "It allows you to update state based on the result of a form action",
      path: "/email-form"
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
