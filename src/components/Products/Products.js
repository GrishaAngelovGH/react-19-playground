import style from "./Products.module.css"

import { use } from "react"

const Products = ({ productsPromise }) => {
  const products = use(productsPromise)

  return (
    <div className={style.products}>
      <ul className={style.list}>
        {
          products.map(v => (
            <li key={v.id} className={style.listItem}>{v.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default Products